function $()
{ var elements = new Array();
for (var i = 0; i < arguments.length; i++)
{ var element = arguments[i];
if (typeof element == 'string')
element = document.getElementById(element);
if (arguments.length == 1)
return element;
elements.push(element);
}
return elements; }

function f1(){
$('x2').style.color='green';
}

function f2(){
$('x2').style.color='red';
}
function f3(){
$('x2').style.color='blue';
}
function f4(){
$('x2').style.color='purple';
}
function f5(){

$('tx1').value="Привет,мир!";
alert("Привет,мир!");

}



