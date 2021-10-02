var timeDisplayEl = $("#currentDay")
const saveButton = $(".saveBtn") // button
var userInput = $(".planSlot") //storageInput
const userData = localStorage.getItem("textinput") //storedInput

//displays the time in the jumbotron and updates every second
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] HH:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);

//changes the color of the rows based on time of day
if ($(".hour") > displayTime){
 $(":input").addClass("future");
 } else if ($(".hour") < displayTime){
     $(":input").addClass("past")
 } else{ $(":input").addClass ("present")}

// function for saving to local storage
if(userInput){
    userInput.textContent = userData
}

userInput.on('input', function(letter){
//    console.log(letter.target.value)
    userInput.textContent = letter.target.value;
})

var saveFunction = function(){
    localStorage.setItem("textinput", userInput.textContent);
}

saveButton.on("click", saveFunction);