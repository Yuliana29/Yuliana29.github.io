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

function f2()
{
	A=parseFloat($('tx5').value);
	B=parseFloat($('tx6').value);
	result='';
	for(var i=A; i<=B; i++)
	{
		for(var j=1; j<= i; j++)
			result=result+i;
	}
	$('tx7').value=result;
}
