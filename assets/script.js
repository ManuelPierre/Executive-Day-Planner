$("#currentDay").text(moment().format("dddd, MMMM Do"));

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17.description").val(localStorage.getItem("hour-17"));

$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  var value = $(".description").val();
  console.log(value);
  var appointment = $(this).parent().attr("id");

  localStorage.setItem(appointment, value);
});

function coordinate() {
  var currentHour = parseInt(moment().format("H"));

  console.log(currentHour);
  console.log(moment().format("H"));
  $(".time-block").each(function () {
    console.log($(this));
    var id = $(this).attr("id");
    console.log(id);
    var parseID = parseInt(id.split("-")[1]);
    if (parseID < currentHour) {
      $(this).addClass("past");
    } else if (parseID === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

coordinate();
