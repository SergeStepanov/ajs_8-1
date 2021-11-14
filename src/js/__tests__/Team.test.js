import Team from '../Team';
import Character from '../character';

const team = new Team();
const magician = new Character('gnom', 'Magician');
const daemon = new Character('kpot', 'Daemon');
const swordsman = new Character('kpoluk', 'Swordsman');

test('тест метода add ', () => {
  team.add(magician);
  expect(team.members).toContain(magician);
});

test('Выброс ошибки метода add', () => {
  expect(() => team.add(magician)).toThrow();
});

test('тест метода addAll ', () => {
  team.addAll(magician, daemon, swordsman, daemon);
  expect(team.members).toContain(magician, daemon, swordsman);
  expect(team.members.size).toBe(3);
});

test('тест метода toArray ', () => {
  team.members.clear();
  team.addAll(magician, daemon, swordsman);
  expect(team.toArray()).toEqual([magician, daemon, swordsman]);
});
