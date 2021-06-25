var tast = {};
var container = $(".container");
var textAreaEL = document.querySelector("textarea");

var rightNow = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").append(rightNow);

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var miltaryhours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let index = 0; index < hours.length; index++) {
  // compare moment.hour() with miltary hour using if and else if and else
  container.append(` 
  <div class="row">
    <div class="col-sm-1 hour time-block">${hours[index]}</div>
     <div class="col-sm-9"><textarea  class="form-control h-100 w-100 p-0 past present future"></textarea></div>
    <div class="col-sm-2"> <button class="saveBtn h-100  "><i class="far fa-save"></i></button></div>
   </div>`);
}

$(".saveBtn").click(function () {
  var textAreaEL = $("textarea").val();
  var newTask = [];
  newTask.push(textAreaEL);
  localStorage.setItem("taskinfo", JSON.stringify(newTask));
});
