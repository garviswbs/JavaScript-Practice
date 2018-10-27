//DATA TYPES
document.getElementById("data-types").innerHTML = "<h3>DATA TYPES<br>1. Numeric - numbers and integers<br> 2. String - strings of letters and symbols<br>3. Boolean - true or false<br>4. Null - stores the intentional absence of a value<br>5. Undefined - placeholder when a variable is not set<br>6. Symbol<br>Hint: you can define the data type using console.log(typeof variableName) "
// SUM
var a = 5;
var b = 4;
var sum = a + b;
document.getElementById("sum").innerHTML = "<h3>SUM <br>var a = " + a + "<br>var b = " + b + "<br>var sum = a+b" + " = " + (a + b) + "</h3>"
// DATE
var date = new Date();
document.getElementById("date").innerHTML = "<h3>DATE <br> Today is " + date + "</h3>"