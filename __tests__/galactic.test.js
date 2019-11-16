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

  test('should correctly return the users life expectancy on mars', () => {
    let userAge = new Age (29, 78);
    expect(parseInt(userAge.lifeExpMars().toFixed())).toEqual(26);
  });

  test('should correctly return the users life expectancy on jupiter', () => {
    let userAge = new Age (29, 78);
    expect(parseInt(userAge.lifeExpJupiter().toFixed())).toEqual(4);
  });

  test('should correctly return the users surpassed life expectancy years on mercury', () => {
    let userAge1 = new Age (80, 78);
    expect(parseInt(userAge1.lifeExpMercurySurpass().toFixed())).toEqual(8);
  });

  test('should correctly return the users surpassed life expectancy years on venus', () => {
    let userAge1 = new Age (80, 78);
    expect(parseInt(userAge1.lifeExpVenusSurpass().toFixed())).toEqual(3);
  });

  test('should correctly return the users surpassed life expectancy years on mars', () => {
    let userAge1 = new Age (80, 78);
    expect(parseInt(userAge1.lifeExpMarsSurpass().toFixed())).toEqual(1);
  });

  test('should correctly return the users surpassed life expectancy years on jupiter', () => {
    let userAge1 = new Age (80, 78);
    expect(parseInt(userAge1.lifeExpJupiterSurpass().toFixed())).toEqual(0);
  });

});

import { Keith } from './../src/galactic.js';

describe('keith', () => {

  test('should return keith richards age in dog years in 2073 on jupiter', () => {
    let keithRichardsAge = new Keith (75);
    expect(parseInt(keithRichardsAge.ageInDogYearsOnPlanetJupiter().toFixed())).toEqual(76);
  });

});
