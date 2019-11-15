import { Age } from './../src/galactic.js';

describe('Age', () => {

  test('should correctly return the users age on mars', () => {
    let userAge = new Age (29);
    expect(parseInt(userAge.ageOnMercury().toFixed())).toEqual(121);

  });
});
