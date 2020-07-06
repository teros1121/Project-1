//A fucntion which uses the text field 'p1' and grabs the value of that number
//The function then returns the percentage (of 1000)
//Example: p1 value is 99
//This function should return 990
//Example: 25, return 250
function percent (COST) {
var per = Number(document.getElementById("p1").value);
var per = per * .01;
return per * COST;
}
