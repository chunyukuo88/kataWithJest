import { mazeSolver } from './mazeSolver';

describe('GIVEN: an array of strings, each representing a horizontal slice of the maze', () => {
  describe('WHEN: mazeSolver is invoked,', () => {
    it('THEN: it returns the maze with a path from start to finish.', () => {
      const input = [
        '########E##',
        '#         #',
        '#S#########',
      ];
      const output = [
        '########O##',
        '#OOOOOOOO  #',
        '#O#########',
      ];

      const result = mazeSolver(input);

      expect(result).toEqual(output);
    });
  });
});
