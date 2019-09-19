import Substitution from './substitution';
import SubstitutionsPair from './substitutions-group';

export default class SubstitutionManager {
    private list: Substitution[] = [];

    public add(value: string, position: number): void {
        const newItem = new Substitution(value, position);

        this.findIndex(newItem);
    }

    public getList(): Substitution[] {
        return [...this.list];
    }

    public clear(): void {
        this.list = [];
    }

    private findIndex(newItem: Substitution): void {
        const { list } = this;
        let left = 0;
        let right = list.length - 1;
        let middle = 0;
        let currentItem = list[right];

        if (currentItem && currentItem.end > newItem.start) {
            while (left <= right) {
                middle = Math.floor((left + right) / 2);
                currentItem = list[middle];

                if (currentItem.end <= newItem.start) {
                    left = middle + 1;
                } else if (currentItem.start >= newItem.end) {
                    right = middle - 1;
                } else {
                    if (currentItem.isIncludedIn(newItem)) {
                        list[middle] = newItem;
                    } else if (currentItem.isCross(newItem) || newItem.isCross(currentItem)) {
                        list[middle] = new SubstitutionsPair(currentItem, newItem);
                    }

                    break;
                }
            }

            if (left > right) {
                list.splice(left, 0, newItem);
            }
        } else {
            list.push(newItem);
        }
    }
}
