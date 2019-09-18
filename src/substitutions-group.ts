import Substitution from './substitution';

export default class SubstitutionsPair extends Substitution {
    public readonly left: Substitution;
    public readonly right: Substitution;

    constructor(a: Substitution, b: Substitution) {
        const value = a.value + b.value.substr(a.end - b.start - 1);

        super(value, a.start);

        this.left = a;
        this.right = b;
    }
}
