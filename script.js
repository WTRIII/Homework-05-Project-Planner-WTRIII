var timeDisplayEl = $("#currentDay")




function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] HH:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

//while ("hour" > setInterval(displayTime, 1000)){
// $("row").setClass("future")
// } else while ("hour" < setInterval(displayTime, 1000){
//     $("row").setClass("past")
// } else{ $("row").setClass ("present")}