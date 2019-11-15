import { Age } from './../src/galactic.js';

describe('Age', () => {

  test('should correctly return the users age on mercury', () => {
    let userAge = new Age (29);
    expect(parseInt(userAge.ageOnMercury().toFixed())).toEqual(121);
  });

  test('should correctly return the users age on venus', () => {
    let userAge = new Age (29);
    expect(parseInt(userAge.ageOnVenus().toFixed())).toEqual(47);
  });

  test('should correctly return the users age on mars', () => {
    let userAge = new Age (29);
    expect(parseInt(userAge.ageOnMars().toFixed())).toEqual(15);
  });

  test('should correctly return the users age on jupiter', () => {
    let userAge = new Age (29);
    expect(parseInt(userAge.ageOnJupiter().toFixed())).toEqual(2);
  });

  test('should correctly return the users life expectancy on mercury', () => {
    let userAge = new Age (29, 78);
    expect(parseInt(userAge.lifeExpMercury().toFixed())).toEqual(204);
  });

  test('should correctly return the users life expectancy on venus', () => {
    let userAge = new Age (29, 78);
    expect(parseInt(userAge.lifeExpVenus().toFixed())).toEqual(79);
  });

});
