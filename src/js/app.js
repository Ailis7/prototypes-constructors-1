// TODO: write your code here

export default function Character(name, type) {
  try {
    if (name.length > 10 || type.length > 10) throw new Error('Много символов');
    if (name.length < 2 || type.length < 2) throw new Error('Мало символов');
    this.name = name;
    this.type = type;
    const baseChar = {
      health: 100,
      level: 1,
      attackWithDefence: {
        Bowman: [25, 25],
        Swordsman: [40, 10],
        Magician: [10, 40],
        Undead: [25, 25],
        Zombie: [40, 10],
        Daemon: [10, 40],
      },
    };
    const { attackWithDefence: { [type]: [a, b] } } = baseChar;
    this.attack = a;
    this.defence = b;
    this.health = baseChar.health;
  } catch (e) {
    console.log(e.message);
  }
}
