"use strict";

function getWeather() {
  return new Promise (function(resolve, reject){
    $.ajax({
      url: "https://jerrits-weather-looker-upper.firebaseio.com/"
    }).done(function(weatherData){
      console.log(weatherData);
      resolve(weatherData);
    });
  });
}

function addCity() {
  return new Promise (function(resolve, reject){

  })
}

function deleteCity() {
  return new Promise (function(resolve, reject){

  })
}
