/** Main parameters of the string, including its position in the text */
export default class LookupItem<T> {
  /** String end position index */
  readonly end: number;
  /** External info */
  readonly info: T | undefined;
  /** String start position index */
  readonly start: number;
  /** String value */
  readonly value: string;

  /**
   * @param value - string value
   * @param position - position in text
   */
  constructor(value: string, position: number, info?: T) {
    this.value = value;
    this.start = position;
    this.end = position + value.length - 1;
    this.info = info;
  }

  /**
   * Checks if positions is cross
   * @param item - object to compare
   */
  isCross(item: LookupItem<T>): boolean {
    return this.start > item.start && this.start < item.end && this.end > item.end;
  }

  /**
   * Checks if the given string is part of the current string
   * @param item - object to compare
   */
  isIncludedIn(item: LookupItem<T>): boolean {
    return this.start >= item.start && this.end <= item.end;
  }
}
