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

function f6(){
$('p1').src="буба.png";
}

function f7(){
$('p1').src="чирва.png";
}
function f8(){
$('p1').src="пика.png";
}
function f9(){
$('p1').src="трефа.png";
}
function f10(){

$('tx1').value="Привет,мир!";
alert("Привет,мир!");

}



