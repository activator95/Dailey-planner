
//this is what saved my mental finding this formatted way of doing the date i didnt like how it didnt have the ordinal numbers and whith this i was able to get them added in 
var setDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(setDay);

//couldnt figure out dayjs for the Do 2nd 3rd and 1st nd st rd so i changed to moment.format
//$(function () {
  //setDay.text(dayjs().format('dddd, MMMM D'));
//console.log(dayjs())
//var currentTime = Day.js().hour();



