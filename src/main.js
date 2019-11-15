import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Age, Keith } from './../src/galactic.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    let userInputAge = $("#age").val();
    let userInputLifeExp = $("#lifeexp").val();
    let userAge = new Age (userInputAge, userInputLifeExp);

    let userMercuryAge = userAge.ageOnMercury().toFixed(4);
    let userVenusAge = userAge.ageOnVenus().toFixed(4);
    let userMarsAge = userAge.ageOnMars().toFixed(4);
    let userJupiterAge = userAge.ageOnJupiter().toFixed(4);

    let userMercuryLifeExp = userAge.lifeExpMercury().toFixed();
    let userVenusLifeExp = userAge.lifeExpVenus().toFixed();
    let userMarsLifeExp = userAge.lifeExpMars().toFixed();
    let userJupiterLifeExp = userAge.lifeExpJupiter().toFixed();

    let userMercuryLifeExpSurpass = userAge.lifeExpMercurySurpass();
    let userVenusLifeExpSurpass = userAge.lifeExpVenusSurpass();
    let userMarsLifeExpSurpass = userAge.lifeExpMarsSurpass();
    let userJupiterLifeExpSurpass = userAge.lifeExpJupiterSurpass();
    let keithRichardsAge = new Keith (75);
    let keithRichardsDogAgeOnJup = keithRichardsAge.ageInDogYearsOnPlanetJupiter().toFixed(3);

    $("#results").show();
    $("#yourage").show();
    $(".mercage").text(userMercuryAge);
    $(".venusage").text(userVenusAge);
    $(".marsage").text(userMarsAge);
    $(".jupage").text(userJupiterAge);
    $(".keith").text(keithRichardsDogAgeOnJup);

    if (userInputAge < userInputLifeExp) {
      $("#liferemaining").show();
      $("#lifesurp").hide();
      $(".mercexp").text(userMercuryLifeExp);
      $(".venusexp").text(userVenusLifeExp);
      $(".marsexp").text(userMarsLifeExp);
      $(".jupiterexp").text(userJupiterLifeExp);
    } else {
      $("#lifesurp").show();
      $("#liferemaining").hide();
      $(".mercsur").text(userMercuryLifeExpSurpass);
      $(".venussur").text(userVenusLifeExpSurpass);
      $(".marssur").text(userMarsLifeExpSurpass);
      $(".jupitersur").text(userJupiterLifeExpSurpass);
    }

  });
});
