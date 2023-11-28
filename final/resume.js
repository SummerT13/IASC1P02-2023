//The following code was done using a tutorial at https://www.elated.com/creating-a-javascript-clock/
function updateClock() {
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  // Pad the minutes and seconds with leading zeros, if required
  var minutePrefix;
  if (currentMinutes < 10) {
    minutePrefix = "0";
  } else {
    minutePrefix = "";
  }
  currentMinutes = minutePrefix + currentMinutes;

  var secondPrefix;
  if (currentSeconds < 10) {
    secondPrefix = "0";
  } else {
    secondPrefix = "";
  }
  currentSeconds = secondPrefix + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = currentHours < 12 ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed

  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = currentHours == 0 ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString =
    currentHours +
    ":" +
    currentMinutes +
    ":" +
    currentSeconds +
    " " +
    timeOfDay;

  // Update the time display
  document.getElementById("Clock").innerHTML = currentTimeString;
}
updateClock();
window.setInterval(updateClock, 1000);
