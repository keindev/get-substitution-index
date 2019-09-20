import faker from 'faker';
import LookupManager from '../manager';

const manager = new LookupManager();

describe('LookupManager', () => {
    beforeEach(() => {
        manager.clear();
    });

    describe('Add strings', () => {
        it('When strings do not intersect, they will all be added to list', () => {
            const name = faker.company.companyName();
            const { length } = name;

            manager.add(name, 0);
            manager.add(name, length * 2);
            manager.add(name, length * 3);
            manager.add(name, length);

            expect(manager.getItems()).toMatchObject([
                { value: name, start: 0, end: length - 1 },
                { value: name, start: length, end: length * 2 - 1 },
                { value: name, start: length * 2, end: length * 3 - 1 },
                { value: name, start: length * 3, end: length * 4 - 1 },
            ]);
        });

        it('When a new string extends an existing one, it replaces it', () => {
            const firstName = faker.name.firstName();
            const fullName = `${firstName}, ${faker.name.lastName()}`;

            manager.add(firstName, 0);
            manager.add(fullName, 0);

            expect(manager.getItems()).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
        });

        it('When an existing string expands a new one, new string is ignored', () => {
            const firstName = faker.name.firstName();
            const fullName = `${firstName}, ${faker.name.lastName()}`;

            manager.add(fullName, 0);
            manager.add(firstName, 0);

            expect(manager.getItems()).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
        });

        it('When an existing string cross with a new, strings are merged', () => {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            const suffix = faker.name.suffix();
            const fullName = `${firstName} ${lastName} ${suffix}`;

            manager.add(`${firstName} ${lastName}`, 0);
            manager.add(`${lastName} ${suffix}`, firstName.length);

            expect(manager.getItems()).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
        });
    });
});
