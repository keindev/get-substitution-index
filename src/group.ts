import LookupItem from './item';

/**
 * Group of strings whose positions is cross
 */
export default class LookupGroup<T> extends LookupItem<T> {
    /**
     * List of string whose positions is crossed
     */
    public readonly group: [LookupItem<T>, LookupItem<T>];

    /**
     * @param a - string with the min starting position index
     * @param b - string with the max ending position index
     */
    constructor(a: LookupItem<T>, b: LookupItem<T>) {
        super(a.value + b.value.substr(a.end - b.start), a.start);

        this.group = [a, b];
    }
}
