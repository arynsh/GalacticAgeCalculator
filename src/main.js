import { Age } from './../src/galactic.js';

$(document).ready(function() {
  $("").submit(function(event) {
    event.preventDefault();

    let userInputAge = 29;
    let userInputAge1 = 80;
    let userInputLifeExp = 78;
    let userAge = new Age (userInputAge, userInputLifeExp);
    let userAge1 = new Age (userInputAge1, userInputLifeExp); // new instance was made so previous tests using 29 still pass

    let userMercuryAge = userAge.ageOnMercury();
    let userVenusAge = userAge.ageOnVenus();
    let userVenusAge = userAge.ageOnMars();
    let userVenusAge = userAge.ageOnJupiter();

    let userMercuryLifeExp = userAge.lifeExpMercury();
    let userVenusLifeExp = userAge.lifeExpVenus();
    let userMarsLifeExp = userAge.lifeExpMars();
    let userJupiterLifeExp = userAge.lifeExpJupiter();

    let userMercuryLifeExpSurpass = userAge1.lifeExpMercurySurpass();
    let userVenusLifeExpSurpass = userAge1.lifeExpVenusSurpass();
    let userMarsLifeExpSurpass = userAge1.lifeExpMarsSurpass();
    let userJupiterLifeExpSurpass = userAge1.lifeExpJupiterSurpass();

  });
});
