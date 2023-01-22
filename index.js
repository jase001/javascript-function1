var a = parseInt(prompt("please insert first number"));
var b = parseInt(prompt("please insert last number"));

var add = a + b;
alert(add);



var fname = prompt("please insert first name");
var lname = prompt("please insert last name");

var first4 = fname.slice(0,4);
var first = lname.slice(0,1);

var combine = first4 + first;
var edit = combine.toLocaleLowerCase();


var output = "Your CapacityBay userId is " + edit ;
alert(output);