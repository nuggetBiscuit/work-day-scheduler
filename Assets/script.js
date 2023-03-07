// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  
  let daTime = dayjs().format('HH:m:ss A');
  // TODO: Add code to display the current date in the header of the page. 
  function currentDay(){
  var dayId = $("#currentDay");
  
  let daDay = dayjs().format('dddd, MMMM D');
  let daYear = dayjs().format(' YYYY');
  
  
  var theDate =daDay + "th" + daYear;
  // Shows current date 
  console.log(theDate);
  // Shows current time 
  console.log(daTime);
  dayId.text(daDay + "th" + daYear);
}
$(document).ready(function() {
  currentDay();
});

function timeBlockId(){
  var timeBlock = ["#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17"];
  var currentHour = dayjs().format('HH');
  console.log(currentHour);

  $.each(timeBlock, function(index, id){
    var blockHour = parseInt(id.substring(6)); // use substring(6) to get the hour value from the ID
    if(blockHour == currentHour){
      $(id).addClass("present");
      console.log("present");
    }
    else if (blockHour < currentHour){
      $(id).addClass("past");
      console.log("past");   
    }
    else if (blockHour > currentHour){
      $(id).addClass("future");
      console.log("future");
    }
  });
}

$(document).ready(function() {
  timeBlockId();
});


// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //





  // Get the value of an input element
  var inputValue = $('#myInput').val();
  
  // Set the text of a paragraph element
  // $('p').text('This text was set with jQuery!');
  
  // Add a click event listener to a button element
  $('.btn').click(function() {
    alert('Button was clicked!');
  });

});
