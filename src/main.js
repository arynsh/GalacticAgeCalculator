import { Age } from './../src/galactic.js';

$(document).ready(function() {
  $("").submit(function(event) {
    event.preventDefault();

    let userInputAge = 29;
    let userAge = new Age (userInputAge);
    let userMercAge = userAge.ageOnMercury();
  });
});
