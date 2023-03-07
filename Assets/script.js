
$(document).ready(function () {
  
  let daTime = dayjs().format('HH:m:ss A');

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
    // Uses substring(6) to get the hour value from the ID
    // Converts from string to number with parseInt
    var blockHour = parseInt(id.substring(6)); 
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

function saveToLocalStorage() {

  var localStor = ['#localStor1', '#localStor2', '#localStor3', '#localStor4', '#localStor5', '#localStor6', '#localStor7', '#localStor8', '#localStor9'];

  var buttons = ['#btn1', '#btn2', '#btn3', '#btn4', '#btn5', '#btn6', '#btn7', '#btn8', '#btn9'];
  
  // Allows user to clear local storage to clean up and start over
  // localStorage.clear();


  // Add event listener to button elements
  $('.btn').click(function() {
    // Get the index of the button element that was clicked
    var index = buttons.indexOf('#' + $(this).attr('id'));

    // Get the value of the corresponding textarea element
    var textareaValue = $(localStor[index]).val();
    
    // Store the value in local storage
    localStorage.setItem('Button' + (index+1), textareaValue);
  });

  // Retrieve the values from local storage and set them to the corresponding textarea elements on page load
  for (var i = 0; i < localStor.length; i++) {
    var storedValue = localStorage.getItem('Button' + (i+1));
    $(localStor[i]).val(storedValue);
  }
}

$(document).ready(function() {
  saveToLocalStorage();
});

});
