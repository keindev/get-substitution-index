import LookupItem from './item';
import LookupGroup from './group';

/**
 * Manager for working with an array of strings
 */
export class LookupManager<T> {
    private list: LookupItem<T>[] = [];

    /**
     * Adds a new string to the list based on the position in the text:
     * -   in the case of intersection of strings positions, the strings are merged
     * -   if a new string extends an existing one, it will replace it
     * -   if a new string is part of an existing string, it will not be added
     *
     * @param value - string to add
     * @param position - position in text
     */
    public add(value: string, position: number, info?: T): void {
        const { list } = this;
        const newItem = new LookupItem<T>(value, position, info);
        let left = 0;
        let middle = 0;
        let right = list.length - 1;
        let currentItem = list[right];

        if (currentItem && currentItem.end > newItem.start) {
            while (left <= right) {
                middle = Math.floor((left + right) / 2);
                currentItem = list[middle];

                if (currentItem.end <= newItem.start) {
                    left = middle + 1;
                } else if (currentItem.start >= newItem.end) {
                    right = middle - 1;
                } else {
                    if (currentItem.isIncludedIn(newItem)) {
                        const leftItemsCount = this.getLeftItemsCount(newItem, middle);
                        const rightItemsCount = this.getRightItemsCount(newItem, middle);

                        list.splice(middle - leftItemsCount, leftItemsCount + rightItemsCount, newItem);
                    } else if (currentItem.isCross(newItem) || newItem.isCross(currentItem)) {
                        list[middle] = new LookupGroup<T>(currentItem, newItem);
                    }

                    break;
                }
            }

            if (left > right) list.splice(left, 0, newItem);
        } else {
            list.push(newItem);
        }
    }

    /**
     * Returns a list of added rows
     */
    public getList(): LookupItem<T>[] {
        return [...this.list];
    }

    /**
     * Replace strings in the text at the specified position, calling the conversion function for each replacement
     * @param text - text for replace
     */
    // TODO: add example
    public replaceIn(text: string, wrap: (item: LookupItem<T>) => string): string {
        const stack: string[] = [];
        let position = 0;

        this.list.forEach(item => {
            if (position < item.start) stack.push(text.substring(position, item.start));

            stack.push(wrap(item));
            position = item.end + 1;
        });

        stack.push(text.substring(position));

        return stack.join('');
    }

    /**
     * Clears a string list
     */
    public clear(): void {
        this.list = [];
    }

    private getLeftItemsCount(newItem: LookupItem<T>, from: number): number {
        const { list } = this;
        let count = -1;
        let currentItem: LookupItem<T> = list[from + count];

        while (currentItem && currentItem.start >= newItem.start) currentItem = list[from + --count];

        return Math.abs(count) - 1;
    }

    private getRightItemsCount(newItem: LookupItem<T>, from: number): number {
        const { list } = this;
        let count = 1;
        let currentItem: LookupItem<T> = list[from + count];

        while (currentItem && currentItem.end <= newItem.end) currentItem = list[from + ++count];

        return count;
    }
}
