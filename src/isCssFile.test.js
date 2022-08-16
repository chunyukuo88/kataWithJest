import { entityShouldBeIgnored } from './isCssFile';

describe('GIVEN: entityShouldBeIgnored() is passed a filepath', () => {
  describe('WHEN: that filepath includes a CSS file,', () => {
    it('THEN: entityShouldBeIgnored() returns `false`.', () => {
      const entity = 'some/directory/myStyles.css';

      const result = entityShouldBeIgnored(entity);

      expect(result).toBeFalsy();
    });
  });
  describe('WHEN: that filepath does not include a CSS file,', () => {
    it('THEN: entityShouldBeIgnored() returns `true`.', () => {
      const entity = 'some/directory/something.md';

      const result = entityShouldBeIgnored(entity);

      expect(result).toBeTruthy();
    });
  });
  describe('WHEN: that filepath includes an entity that should be ignored,', () => {
    it('THEN: entityShouldBeIgnored() returns `true`.', () => {
      const entity = 'node_modules';

      const result = entityShouldBeIgnored(entity);

      expect(result).toBeTruthy();
    });
  });
});
