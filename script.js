var timeDisplayEl = $("#currentDay")
const saveButton = $(".saveBtn") // button
var userInput = $(".planSlot") //storageInput
const userData = localStorage.getItem("textinput") //storedInput
var am8 = $("#am8");
var am9 = $("#am9");
var am10 = $("#am10");
var am11 = $("#am11");
var am12 = $("#am12");
var am13 = $("#am13");
var am14 = $("#am14");
var am15 = $("#am15");
var am16 = $("#am16");
var am17 = $("#am17");
var am18 = $("#am18");

var time8 = moment().set({'hour': 8, 'minute': 0}).format('HHmm');
am8.text(time8);

var time9 = moment().set({'hour': 9, 'minute': 0}).format('HHmm');
am9.text(time9);

var time10 = moment().set({'hour': 10, 'minute': 0}).format('HHmm');
am10.text(time10);

var time11 = moment().set({'hour': 11, 'minute': 0}).format('HHmm');
am11.text(time11);

var time12 = moment().set({'hour': 12, 'minute': 0}).format('HHmm');
am12.text(time12);

var time13 = moment().set({'hour': 13, 'minute': 0}).format('HHmm');
am13.text(time13);

var time14 = moment().set({'hour': 14, 'minute': 0}).format('HHmm');
am14.text(time14);

var time15 = moment().set({'hour': 15, 'minute': 0}).format('HHmm');
am15.text(time15);

var time16 = moment().set({'hour': 16, 'minute': 0}).format('HHmm');
am16.text(time16);

var time17 = moment().set({'hour': 17, 'minute': 0}).format('HHmm');
am17.text(time17);

var time18 = moment().set({'hour': 18, 'minute': 0}).format('HHmm');
am18.text(time18);

//displays the time in the jumbotron and updates every second

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] HH:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);

//changes the color of the rows based on time of day
if (time8 < timeDisplayEl){
 $("#input-08").addClass("future"); //need to target individual inputs rather than all
 } else if (time8 > timeDisplayEl){
     $("#input-08").addClass("past")
 } else{
    $("#input-08").addClass("present")
}
if (time9 < timeDisplayEl){
    $("#input-09").addClass("future"); //need to target individual inputs rather than all
    } else if (time8 > timeDisplayEl){
        $("#input-09").addClass("past")
    } else{
        $("#input-09").addClass("present")
    }
if (time10 < timeDisplayEl){
    $("#input-10").addClass("future"); //need to target individual inputs rather than all
    } else if (time10 > timeDisplayEl){
        $("#input-10").addClass("past")
    } else{
        $("#input-10").addClass("present")
    }
if (time11 < timeDisplayEl){
    $("#input-11").addClass("future"); //need to target individual inputs rather than all
    } else if (time11 > timeDisplayEl){
        $("#input-11").addClass("past")
    } else{
        $("#input-11").addClass("present")
    }
if (time12 < timeDisplayEl){
    $("#input-12").addClass("future"); //need to target individual inputs rather than all
    } else if (time12 > timeDisplayEl){
        $("#input-12").addClass("past")
    } else{
        $("#input-12").addClass("present")
    }
if (time13 < timeDisplayEl){
    $("#input-13").addClass("future"); //need to target individual inputs rather than all
    } else if (time12 > timeDisplayEl){
        $("#input-13").addClass("past")
    } else{
        $("#input-13").addClass("present")
    }
if (time14 < timeDisplayEl){
    $("#input-14").addClass("future"); //need to target individual inputs rather than all
    } else if (time12 > timeDisplayEl){
        $("#input-14").addClass("past")
    } else{
        $("#input-14").addClass("present")
    }
if (time15 < timeDisplayEl){
    $("#input-15").addClass("future"); //need to target individual inputs rather than all
    } else if (time15 > timeDisplayEl){
        $("#input-15").addClass("past")
    } else{
        $("#input-15").addClass("present")
    }
if (time16 < timeDisplayEl){
    $("#input-16").addClass("future"); //need to target individual inputs rather than all
    } else if (time16 > timeDisplayEl){
        $("#input-16").addClass("past")
    } else{
        $("#input-16").addClass("present")
    }
if (time17 < timeDisplayEl){
    $("#input-17").addClass("future"); //need to target individual inputs rather than all
    } else if (time17 > timeDisplayEl){
        $("#input-17").addClass("past")
    } else{
        $("#input-17").addClass("present")
    }
if (time18 < timeDisplayEl){
    $("#input-18").addClass("future"); //need to target individual inputs rather than all
    } else if (time18 > timeDisplayEl){
        $("#input-18").addClass("past")
    } else{
        $("#input-18").addClass("present")
    }

// function for saving to local storage
var saveArray = [];
localStorage.setItem('textinput', JSON.stringify(saveArray));
const savedData = JSON.parse(localStorage.getItem('textinput'));
///
let plans;
if(localStorage.getItem('textinput')){
plans = JSON.parse(localStorage.getItem('textinput'))
    // userInput.textContent = userData
}else{
    plans = []
}

userInput.on('input', function(letter){
    console.log(letter.target.value)
    userInput.textContent = letter.target.value;
})

var saveFunction = function(){
    localStorage.setItem("textinput", userInput.textContent);
    // localStorage.setItem('textinput', JSON.stringify(saveArray));
    // saveArray.push(userInput.value);
}

saveButton.on("click", saveFunction);