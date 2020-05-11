import Character from '../app';

test('create Bowman', () => {
  const man = new Character('Вася', 'Bowman');
  expect(man).toEqual({
    name: 'Вася', type: 'Bowman', attack: 25, defence: 25, health: 100,
  });
});

test('слишком длинно', () => {
  expect(() => {
    const man = new Character('Mухахахахахахахаха', 'Undead');
    man();
  }).toThrowError();
});

test('слишком коротко', () => {
  expect(() => {
    const man = new Character('M', 'Daemon');
    man();
  }).toThrowError();
});
