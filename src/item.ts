export default class LookupItem {
    public readonly value: string;
    public readonly start: number;
    public readonly end: number;

    constructor(value: string, position: number) {
        this.value = value;
        this.start = position;
        this.end = position + value.length - 1;
    }

    public isIncludedIn(item: LookupItem): boolean {
        return this.start >= item.start && this.end <= item.end;
    }

    public isCross(item: LookupItem): boolean {
        return this.start > item.start && this.start < item.end && this.end > item.end;
    }
}
