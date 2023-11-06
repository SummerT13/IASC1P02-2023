var start = new Date();

//show pop up with the time spent
function stopTime() {
  var stop = new Date();
  var totaltime = stop.getTime() - start.getTime();
  var totaltimesec = totaltime / 600;
  alert("You have been here for " + totaltimesec + " seconds");
}
