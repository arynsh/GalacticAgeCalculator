import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
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
    let userMarsAge = userAge.ageOnMars();
    let userJupiterAge = userAge.ageOnJupiter();

    let userMercuryLifeExp = userAge.lifeExpMercury();
    let userVenusLifeExp = userAge.lifeExpVenus();
    let userMarsLifeExp = userAge.lifeExpMars();
    let userJupiterLifeExp = userAge.lifeExpJupiter();

    let userMercuryLifeExpSurpass = userAge1.lifeExpMercurySurpass();
    let userVenusLifeExpSurpass = userAge1.lifeExpVenusSurpass();
    let userMarsLifeExpSurpass = userAge1.lifeExpMarsSurpass();
    let userJupiterLifeExpSurpass = userAge1.lifeExpJupiterSurpass();

    $("#yourage").show();
    $(".mercage").text(userMercuryAge);
    $(".venusage").text(userVenusAge);
    $(".marsage").text(userMarsAge);
    $(".jupage").text(userJupiterAge);

    if (userInputAge < userInputLifeExp) {
      $("#liferemaining").show();
      $(".mercexp").text(userMercuryLifeExp);
      $(".venusexp").text(userVenusLifeExp);
      $(".marsexp").text(userMarsLifeExp);
      $(".jupiterexp").text(userJupiterLifeExp);
    } else {
      $("#lifesurp").show();
      $(".mercsur").text(userMercuryLifeExpSurpass);
      $(".venussur").text(userVenusLifeExpSurpass);
      $(".marssur").text(userMarsLifeExpSurpass);
      $(".jupitersur").text(userJupiterLifeExpSurpass);
    }

  });
});
