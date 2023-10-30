function total() {
  var firstone = document.getElementById("firstnumber").value;
  var secondone = document.getElementById("secondnumber").value;
  var numbers = Number(firstone) + Number(secondone);
  document.getElementById("sum").innerHTML = numbers;
}
