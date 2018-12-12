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

function f2()
	{
        a=parseFloat($('tx3').value);
	b=parseFloat($('tx4').value);
	x1=a;
        x2=b;
		if(a>b)
		{$('tx5').value=''+a;
		}
		else 
		{$('tx5').value=''+b;
		}
	}
function f3()
{
        a=parseFloat($('tx3').value);
	b=parseFloat($('tx4').value);
        x1=a;
        x2=b;
	if(a<b)
{$('tx5').value=''+a;
}
else
{$('tx5').value=''+b;
}
}
