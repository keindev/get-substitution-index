import faker from 'faker';
import SubstitutionManager from '../manager';

const manager = new SubstitutionManager();

describe('SubstitutionManager', () => {
    beforeEach(() => {
        manager.clear();
    });

    describe('Add substitutions', () => {
        it('When substitutions do not cross, all three will be added to the list', () => {
            const name = faker.company.companyName();
            const { length } = name;

            manager.add(name, 0);
            manager.add(name, length * 2);
            manager.add(name, length * 3);
            manager.add(name, length);

            expect(manager.getList()).toMatchObject([
                { value: name, start: 0, end: length - 1 },
                { value: name, start: length, end: length * 2 - 1 },
                { value: name, start: length * 2, end: length * 3 - 1 },
                { value: name, start: length * 3, end: length * 4 - 1 },
            ]);
        });

        it('When a new substitution extends an existing one, it replaces it', () => {
            const firstName = faker.name.firstName();
            const fullName = `${firstName}, ${faker.name.lastName()}`;

            manager.add(firstName, 0);
            manager.add(fullName, 0);

            expect(manager.getList()).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
        });

        it('When an existing substitution expands a new one, new substitution is ignored', () => {
            const firstName = faker.name.firstName();
            const fullName = `${firstName}, ${faker.name.lastName()}`;

            manager.add(fullName, 0);
            manager.add(firstName, 0);

            expect(manager.getList()).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
        });

        it('When a new When an existing substitution cross with a new, substitutions join', () => {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            const suffix = faker.name.suffix();
            const fullName = `${firstName} ${lastName} ${suffix}`;

            manager.add(`${firstName} ${lastName}`, 0);
            manager.add(`${lastName} ${suffix}`, firstName.length);

            expect(manager.getList()).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
        });
    });
});
