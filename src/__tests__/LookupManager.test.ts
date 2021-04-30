import faker from 'faker';

import LookupItem from '../LookupItem';
import LookupManager from '../LookupManager';

interface IExternalInfo {
  value: string;
}

describe('LookupManager', () => {
  const manager = new LookupManager<IExternalInfo>();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const suffix = faker.name.suffix();
  const fullName = `${firstName} ${lastName} ${suffix}`;

  beforeEach(() => {
    manager.clear();
  });

  describe('Add strings', () => {
    it('When strings do not intersect, they will all be added to list', () => {
      const { length } = firstName;

      manager.add(firstName, 0);
      manager.add(firstName, length * 2);
      manager.add(firstName, length * 3);
      manager.add(firstName, length);

      expect(manager.items).toMatchObject([
        { value: firstName, start: 0, end: length - 1 },
        { value: firstName, start: length, end: length * 2 - 1 },
        { value: firstName, start: length * 2, end: length * 3 - 1 },
        { value: firstName, start: length * 3, end: length * 4 - 1 },
      ]);
    });

    it('When a new string extends an existing one, it replaces it', () => {
      manager.add(firstName, 0);
      manager.add(fullName, 0);

      expect(manager.items).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
    });

    it('When an existing string expands a new one, new string is ignored', () => {
      manager.add(fullName, 0);
      manager.add(firstName, 0);

      expect(manager.items).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
    });

    it('When a new string extends existing strings, a new string replaces them', () => {
      const prefix = faker.name.prefix();

      manager.add(prefix, 0);
      manager.add(firstName, prefix.length);
      manager.add(lastName, prefix.length + firstName.length);
      manager.add(suffix, prefix.length + firstName.length + lastName.length);
      manager.add(fullName, prefix.length);

      expect(manager.items).toMatchObject([
        { value: prefix, start: 0, end: prefix.length - 1 },
        { value: fullName, start: prefix.length, end: prefix.length + fullName.length - 1 },
      ]);
    });

    it('When an existing string cross with a new, strings are merged', () => {
      manager.add(`${firstName} ${lastName}`, 0);
      manager.add(`${lastName} ${suffix}`, firstName.length);

      expect(manager.items).toMatchObject([{ value: fullName, start: 0, end: fullName.length - 1 }]);
    });
  });

  describe('Replace strings', () => {
    it('Replacing tags in text with markdown code block', () => {
      const text = 'code <div /> example';
      const wrap = (item: LookupItem<IExternalInfo>): string => `\`${(item.info as IExternalInfo).value}\``;

      manager.add('<div />', 5, { value: '<span />' });

      expect(manager.replace(text, wrap)).toBe('code `<span />` example');
    });
  });
});
