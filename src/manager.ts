import LookupItem from './item';
import LookupGroup from './group';

export class LookupManager {
    private list: LookupItem[] = [];

    public add(value: string, position: number): void {
        const { list } = this;
        const newItem = new LookupItem(value, position);
        let left = 0;
        let middle = 0;
        let right = list.length - 1;
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
                        const leftItemsCount = this.getLeftItemsCount(newItem, middle);
                        const rightItemsCount = this.getRightItemsCount(newItem, middle);

                        list.splice(middle - leftItemsCount, leftItemsCount + rightItemsCount, newItem);
                    } else if (currentItem.isCross(newItem) || newItem.isCross(currentItem)) {
                        list[middle] = new LookupGroup(currentItem, newItem);
                    }

                    break;
                }
            }

            if (left > right) list.splice(left, 0, newItem);
        } else {
            list.push(newItem);
        }
    }

    public getItems(): LookupItem[] {
        return [...this.list];
    }

    public clear(): void {
        this.list = [];
    }

    private getLeftItemsCount(newItem: LookupItem, from: number): number {
        const { list } = this;
        let count = -1;
        let currentItem: LookupItem = list[from + count];

        while (currentItem && currentItem.start >= newItem.start) currentItem = list[from + --count];

        return Math.abs(count) - 1;
    }

    private getRightItemsCount(newItem: LookupItem, from: number): number {
        const { list } = this;
        let count = 1;
        let currentItem: LookupItem = list[from + count];

        while (currentItem && currentItem.end <= newItem.end) currentItem = list[from + ++count];

        return count;
    }
}
