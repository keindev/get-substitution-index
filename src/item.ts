/**
 * Main parameters of the string, including its position in the text
 */
export default class LookupItem<T> {
    /** String value */
    public readonly value: string;
    /** String start position index */
    public readonly start: number;
    /** String end position index */
    public readonly end: number;
    /** External info */
    public readonly info: T | undefined;

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
     * Checks if the given string is part of the current string
     * @param item - object to compare
     */
    public isIncludedIn(item: LookupItem<T>): boolean {
        return this.start >= item.start && this.end <= item.end;
    }

    /**
     * Checks if positions is cross
     * @param item - object to compare
     */
    public isCross(item: LookupItem<T>): boolean {
        return this.start > item.start && this.start < item.end && this.end > item.end;
    }
}
