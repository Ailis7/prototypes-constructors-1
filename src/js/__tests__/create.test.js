import Character from '../app';

test('create Bowman', () => {
  const man = new Character('Вася', 'Bowman');
  expect(man).toEqual({
    name: 'Вася', type: 'Bowman', attack: 25, defence: 25, health: 100,
  });
});

test('error', () => {
  const man = new Character('M', 'Daemon');
  expect(man).toEqual({}); // понять не могу как проверить Jestом на ошибку
}); // toThrow и toThrowError не работают

test('error', () => {
  const man = new Character('Mухахахахахахахаха', 'Undead');
  expect(man).toEqual({}); // понять не могу как проверить Jestом на ошибку
}); // toThrow и toThrowError не работают
