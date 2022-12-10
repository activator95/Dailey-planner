
//this is what saved my mental finding this formatted way of doing the date i didnt like how it didnt have the ordinal numbers and whith this i was able to get them added in 
var setDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(setDay);

//couldnt figure out dayjs for the Do 2nd 3rd and 1st nd st rd so i changed to moment.format
//$(function () {
  //setDay.text(dayjs().format('dddd, MMMM D'));
//console.log(dayjs())
//var currentTime = Day.js().hour();
$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,value);
//this notification hide removeclass makes it so when i save the text a little pop up shows up showing its saved
    $(".notification").removeClass("hide");

    setTimeout(function() {
      $(".notification").addClass("hide");
    }, 3000);
  });
//my else if statement to show past present future for the colors to change in the code green for future red for present and grey for past
  function hourUpdater() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  setInterval(hourUpdater, 15000);
//local storage for all my hours to save the comments that i make into the tect box this saves to local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));

  //$("#currentDay").text(dayjs().format("dddd, MMMM Do, YYYY"));
  //couldnt get Do to work in day.js but did get it to work with moment

});