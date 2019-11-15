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

});
