export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    const heroes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if ((name.length >= 2 && name.length <= 10) && (typeof name === 'string')) {
      this.name = name;
    } else {
      throw new Error(
        'Имя должно быть строкой и содержать от 2 до 10 символов.',
      );
    }

    if (
      (typeof type === 'string')
      && (heroes.includes(type))
    ) {
      this.type = type;
    } else {
      throw new Error('Такой персонаж не существует.');
    }
  }
}
