import LookupItem from './item';
import LookupGroup from './group';

export default class LookupManager {
    private list: LookupItem[] = [];

    public add(value: string, position: number): void {
        const newItem = new LookupItem(value, position);
        const { list } = this;
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
                        list[middle] = newItem;
                    } else if (currentItem.isCross(newItem) || newItem.isCross(currentItem)) {
                        list[middle] = new LookupGroup(currentItem, newItem);
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

    public getItems(): LookupItem[] {
        return [...this.list];
    }

    public clear(): void {
        this.list = [];
    }
}
