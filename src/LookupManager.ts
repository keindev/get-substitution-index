import LookupGroup from './LookupGroup.js';
import LookupItem from './LookupItem.js';

const LEFT_ITEMS_COUNT_DEFAULT = -1;
const RIGHT_ITEMS_COUNT_DEFAULT = 1;

/** Manager for working with an array of strings */
export class LookupManager<T> {
  #list: LookupItem<T>[] = [];

  /**
   * Adds a new string to the list based on the position in the text:
   * -   in the case of intersection of strings positions, the strings are merged
   * -   if a new string extends an existing one, it will replace it
   * -   if a new string is part of an existing string, it will not be added
   *
   * @param value - string to add
   * @param position - position in text
   */
  add(value: string, position: number, info?: T): void {
    const newItem = new LookupItem<T>(value, position, info);
    let left = 0;
    let middle = 0;
    let right = this.#list.length - 1;
    let currentItem = this.#list[right];

    if (currentItem && currentItem.end > newItem.start) {
      while (left <= right) {
        middle = Math.floor((left + right) / 2);
        currentItem = this.#list[middle];

        if (currentItem) {
          if (currentItem.end <= newItem.start) {
            left = middle + 1;
          } else if (currentItem.start >= newItem.end) {
            right = middle - 1;
          } else {
            if (currentItem.isIncludedIn(newItem)) {
              const leftItemsCount = this.getLeftItemsCount(newItem, middle);
              const rightItemsCount = this.getRightItemsCount(newItem, middle);

              this.#list.splice(middle - leftItemsCount, leftItemsCount + rightItemsCount, newItem);
            } else if (currentItem.isCross(newItem) || newItem.isCross(currentItem)) {
              this.#list[middle] = new LookupGroup<T>(currentItem, newItem);
            }

            break;
          }
        }
      }

      if (left > right) this.#list.splice(left, 0, newItem);
    } else {
      this.#list.push(newItem);
    }
  }

  /** Returns a list of added rows */
  get items(): LookupItem<T>[] {
    return [...this.#list];
  }

  /** Clears a string list */
  clear(): void {
    this.#list = [];
  }

  /**
   * Replace strings in the text at the specified position, calling the conversion function for each replacement
   *
   * @param text - the text in which the string will be replaced
   */
  replace(text: string, wrap: (item: LookupItem<T>) => string): string {
    const stack: string[] = [];

    stack.push(
      text.substring(
        this.#list.reduce((acc, item) => {
          if (acc < item.start) stack.push(text.substring(acc, item.start));

          stack.push(wrap(item));

          return item.end + 1;
        }, 0)
      )
    );

    return stack.join('');
  }

  private getLeftItemsCount(newItem: LookupItem<T>, from: number): number {
    let count = LEFT_ITEMS_COUNT_DEFAULT;
    let currentItem = this.#list[from + count];

    while (currentItem && currentItem.start >= newItem.start) currentItem = this.#list[from + --count];

    return Math.abs(count) - 1;
  }

  private getRightItemsCount(newItem: LookupItem<T>, from: number): number {
    let count = RIGHT_ITEMS_COUNT_DEFAULT;
    let currentItem = this.#list[from + count];

    while (currentItem && currentItem.end <= newItem.end) currentItem = this.#list[from + ++count];

    return count;
  }
}

export default LookupManager;
