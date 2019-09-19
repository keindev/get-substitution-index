import Substitution from './substitution';
import SubstitutionsPair from './substitutions-group';

export default class SubstitutionManager {
    private list: Substitution[] = [];

    public add(value: string, position: number): void {
        const newItem = new Substitution(value, position);

        this.findIndex(newItem);
        /*
        if (index >= 0) {
            if (Number.isFinite(index)) {
                list.splice(index, 0, newItem);
            } else {
                list[0] = newItem;
            }
        } else if (Number.isFinite(index)) {
            list[Math.abs(index)] = newItem;
        }
        */
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

    /*
    half = (value: number): number => ~~(value / 2);

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
    */
}

/*
function BinarySearch(t,A)         // t - искомый элемент,
{                                  // A - упорядоченный массив, в котором ищем.
    var i = 0, j = A.length-1, k;

    while (i <= j)
    {  k = Math.floor((i+j)/2);
       if (t === A[k]) return k;
       else if (t < A[k]) j = k-1;
       else i = k+1;
    }
                                   // На выходе индекс искомого элемента.
    return -1;                     // Если искомого элемента нет в массиве, то -1.
}
*/
