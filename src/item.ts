/**
 * Main parameters of the string, including its position in the text
 */
export default class LookupItem {
    /** String value */
    public readonly value: string;
    /** String start position index */
    public readonly start: number;
    /** String end position index */
    public readonly end: number;

    /**
     * @param value - string value
     * @param position - position in text
     */
    constructor(value: string, position: number) {
        this.value = value;
        this.start = position;
        this.end = position + value.length - 1;
    }

    /**
     * Checks if the given string is part of the current string
     * @param item - object to compare
     */
    public isIncludedIn(item: LookupItem): boolean {
        return this.start >= item.start && this.end <= item.end;
    }

    /**
     * Checks if positions is cross
     * @param item - object to compare
     */
    public isCross(item: LookupItem): boolean {
        return this.start > item.start && this.start < item.end && this.end > item.end;
    }
}
