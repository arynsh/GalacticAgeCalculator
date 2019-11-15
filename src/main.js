import { Age } from './../src/galactic.js';

$(document).ready(function() {
  $("").submit(function(event) {
    event.preventDefault();

    let userInputAge = 29;
    let userInputLifeExp = 78;
    let userAge = new Age (userInputAge, userInputLifeExp);
    let userMercuryAge = userAge.ageOnMercury();
    let userVenusAge = userAge.ageOnVenus();
    let userVenusAge = userAge.ageOnMars();
    let userVenusAge = userAge.ageOnJupiter();
    let userMercuryLifeExp = userAge.lifeExpMercury();
    let userVenusLifeExp = userAge.lifeExpVenus();
    let userMarsLifeExp = userAge.lifeExpMars();
    let userJupiterLifeExp = userAge.lifeExpJupiter();
  });
});
