import Character from '../src/app';

test('power mode is on', () => {
  const char = new Character();
  char.powerModeOn();
  const recieved = [char.health, char.attack, char.defence];
  const expected = [200, 20, 80];
  expect(recieved).toEqual(expected);
});

test('power mode expired', () => {
  const char = new Character();
  char.powerModeOn();
  char.toAttack();
  char.toAttack();
  char.toAttack();
  char.toAttack();
  const recieved = [char.health, char.attack, char.defence];
  const expected = [100, 10, 40];
  expect(recieved).toEqual(expected);
});

test('power mode used before', () => {
  function recieved() {
    const char = new Character();
    char.powerModeOn();
    char.powerModeOn();
  }
  expect(recieved).toThrow('Усиление уже использовалось.');
});
