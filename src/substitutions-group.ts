import Substitution from './substitution';

export default class SubstitutionsPair extends Substitution {
    public readonly left: Substitution;
    public readonly right: Substitution;

    constructor(a: Substitution, b: Substitution) {
        super(a.value + b.value.substr(a.end - b.start), a.start);

        this.left = a;
        this.right = b;
    }
}
