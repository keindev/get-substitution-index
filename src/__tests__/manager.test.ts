import SubscriptionManager from '../manager';

describe('SubscriptionManager', () => {
    describe('Add subscriptions', () => {
        it('When substitutions do not cross, all three will be added to the list', () => {
            const manager = new SubscriptionManager();

            manager.add('test', 0);
            manager.add('test', 5);
            manager.add('test', 10);

            expect(manager.getList()).toMatchObject([
                { value: 'test', start: 0, end: 4 },
                { value: 'test', start: 5, end: 9 },
                { value: 'test', start: 10, end: 14 },
            ]);
        });

        it('When substitutions cross, the longest ones are added', () => {
            const manager = new SubscriptionManager();

            manager.add('test', 0);
            // manager.add('test', 2);

            expect(manager.getList()).toMatchObject([{ value: 'test', start: 0, end: 4 }]);
        });
    });
});
