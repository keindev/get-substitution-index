import LookupItem from './item';

export class LookupManager {
    private list: LookupItem[] = [];

    public add(value: string, position: number): void {
        const newItem = new LookupItem(value, position);
        const { list } = this;
        let left = 0;
        let middle = 0;
        let right = list.length - 1;
        let currentItem = list[right];

        if (currentItem && currentItem.end > newItem.start) {
            let deleteCount = 0;

            while (left <= right) {
                middle = Math.floor((left + right) / 2);
                currentItem = list[middle];

                if (currentItem.end <= newItem.start) {
                    left = middle + 1;
                } else if (currentItem.start >= newItem.end) {
                    right = middle - 1;
                } else {
                    // FIXME: add cross strings merging
                    while (currentItem && currentItem.isIncludedIn(newItem)) currentItem = list[middle + ++deleteCount];

                    list.splice(middle, deleteCount, newItem);
                    break;
                }
            }

            if (left > right) list.splice(left, deleteCount, newItem);
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
