import Substitution from './substitution';
import { half } from './utils';

export default class SubstitutionManager {
    private list: Substitution[] = [];

    public add(value: string, position: number): void {
        const { list } = this;
        const newItem = new Substitution(value, position);
        const index = this.findIndex(newItem, 0, Math.max(half(list.length), 1));

        if (index >= 0) {
            if (Number.isFinite(index)) {
                list.splice(index, 0, newItem);
            } else {
                list[0] = newItem;
            }
        } else if (Number.isFinite(index)) {
            list[Math.abs(index)] = newItem;
        }
    }

    // FIXME: rewrite to iterative binary search
    private findIndex(newItem: Substitution, left: number, right: number): number {
        const { list } = this;

        if (right <= list.length && left < right) {
            const currentItem = list[right - 1];

            if (currentItem.end <= newItem.start)
                return this.findIndex(newItem, right, right + half(list.length - right + 1));
            if (currentItem.start >= newItem.end) return this.findIndex(newItem, left, left + half(right - left));
            if (newItem.isIncludedIn(currentItem)) return -Infinity;
            if (currentItem.isIncludedIn(newItem)) return right === 1 ? Infinity : -(right - 1);
            if (currentItem.isCross(newItem)) return Infinity;
        }

        return right;
    }
    /*
    half = (value: number): number => ~~(value / 2);
    */
}
