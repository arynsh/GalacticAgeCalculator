import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Age } from './../src/galactic.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    let userInputAge = $("#age").val();
    let userInputLifeExp = $("#lifeexp").val();
    let userAge = new Age (userInputAge, userInputLifeExp);

    let userMercuryAge = userAge.ageOnMercury();
    let userVenusAge = userAge.ageOnVenus();
    let userMarsAge = userAge.ageOnMars();
    let userJupiterAge = userAge.ageOnJupiter();

    let userMercuryLifeExp = userAge.lifeExpMercury();
    let userVenusLifeExp = userAge.lifeExpVenus();
    let userMarsLifeExp = userAge.lifeExpMars();
    let userJupiterLifeExp = userAge.lifeExpJupiter();

    let userMercuryLifeExpSurpass = userAge.lifeExpMercurySurpass();
    let userVenusLifeExpSurpass = userAge.lifeExpVenusSurpass();
    let userMarsLifeExpSurpass = userAge.lifeExpMarsSurpass();
    let userJupiterLifeExpSurpass = userAge.lifeExpJupiterSurpass();

    $("#yourage").show();
    $(".mercage").text(userMercuryAge);
    $(".venusage").text(userVenusAge);
    $(".marsage").text(userMarsAge);
    $(".jupage").text(userJupiterAge);

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
