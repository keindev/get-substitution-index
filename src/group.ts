import LookupItem from './item';

/**
 * Group of strings whose positions is cross
 */
export default class LookupGroup extends LookupItem {
    /**
     * List of string whose positions is crossed
     */
    public readonly group: [LookupItem, LookupItem];

    /**
     * @param a - string with the min starting position index
     * @param b - string with the max ending position index
     */
    constructor(a: LookupItem, b: LookupItem) {
        super(a.value + b.value.substr(a.end - b.start), a.start);

        this.group = [a, b];
    }
}
