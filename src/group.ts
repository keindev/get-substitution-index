import LookupItem from './item';

export default class LookupGroup extends LookupItem {
    public readonly group: LookupItem[];

    constructor(a: LookupItem, b: LookupItem) {
        super(a.value + b.value.substr(a.end - b.start), a.start);

        this.group = [a, b];
    }
}
