export default class Substitution {
    public readonly value: string;
    public readonly start: number;
    public readonly end: number;

    constructor(value: string, position: number) {
        this.value = value;
        this.start = position;
        this.end = position + value.length;
    }

    isIncludedIn(substitution: Substitution): boolean {
        return this.start >= substitution.start && this.end <= substitution.end;
    }

    isCross(substitution: Substitution): boolean {
        return this.start >= substitution.start && this.start <= substitution.end && this.end >= substitution.end;
    }
}
