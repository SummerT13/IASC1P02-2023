var age = prompt("What is your age?");

var todayDate = new Date();

var birthyear = todayDate.getFullYear() - age;

document.getElementById("year").innerHTML = birthyear;
