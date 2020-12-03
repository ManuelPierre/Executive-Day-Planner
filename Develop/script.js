// Set the body to a variable
// var body = document.body;
// var currentDate;

// Create all necessary elements
// var h1El = document.createElement("h1");
// currentDate = moment().format("dddd MMM Do YYYY, h:mm a");

// // Set the text content of relevant elements
// h1El.textContent = currentDate;

// body.appendChild(h1El);

// var appointText = "";
// var appointTime = "";
// var currentDate;
// var currentTime;
// var currentContainer;
// var tempArray = [];
// var storedAppointments;
// var returnedAppointments;

// $(document).on("load", function () {
// currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
//   $("#currentDay").append(currentDate);
// });

// $("#currentDay").ready(function () {
//   currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
//   $("#currentDay").append(currentDate);
// });

$("#currentDay").text(moment().format("dddd, MMMM Do"));
