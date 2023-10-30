var start = new Date();

function stopTime() {
  var stop = new Date();
  var totaltime = stop.getTime() - start.getTime();
  var totaltimesec = totaltime / 600;
  alert("You have been here for " + totaltimesec + " seconds");
}
