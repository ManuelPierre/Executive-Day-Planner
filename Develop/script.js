$("#currentDay").text(moment().format("dddd, MMMM Do"));

$("hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-3"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));

$(".saveBtn").on("click", function () {
  event.preventDefault();

  var value = $(".description").val();
  var appointment = $(this).parent().attr("id");

  localStorage.setItem(appointment, value);
});

function coordinate() {
  var currentHour = moment().format("H");
  var numValue = $("hour-9").val("id");
  var row = $("hour-9");
  trueValue = numValue.prevObject[0].nodeType;
  console.log(numValue);
  //   console.log(value.prevObject[0].nodeType);

  console.log(currentHour);
  $(".time-block").each(function () {
    console.log(trueValue);

    if (trueValue < currentHour) {
      $(this).addClass("past");
    } else if (trueValue === currentHour) {
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


