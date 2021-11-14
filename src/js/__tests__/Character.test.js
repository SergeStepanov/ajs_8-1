/* eslint-disable linebreak-style */

import Character from '../character';

test('Проверка базового класса Character', () => {
  const gamerCharacter = new Character('Gamer', 'Zombie');

  const result = {
    health: 100,
    level: 1,
    name: 'Gamer',
    type: 'Zombie',
  };

  expect(gamerCharacter).toEqual(result);
});

test('проерка на несоответствие имени', () => {
  expect(() => new Character('o')).toThrow('Имя должно быть строкой и содержать от 2 до 10 символов.');
});

test('проерка на отсутствие типа', () => {
  expect(() => new Character('oпана')).toThrow('Такой персонаж не существует.');
});
