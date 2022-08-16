import { isCssFile } from './isCssFile';

describe('GIVEN: isCssFile() is passed a filepath', () => {
  describe('WHEN: the file in the path is a CSS file,', () => {
    it('THEN: isCssFile() returns `true`.', () => {
      const entity = 'some/directory/myStyles.css';

      const result = isCssFile(entity);

      expect(result).toBeTruthy();
    });
  });
  describe('WHEN: the file in the path is not a CSS file,', () => {
    it('THEN: isCssFile() returns `false`.', () => {
      const entity = 'some/directory/myStyles.jsx';

      const result = isCssFile(entity);

      expect(result).toBeFalsy();
    });
  });
});
