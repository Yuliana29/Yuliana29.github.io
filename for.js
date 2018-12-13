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
N=parseFloat($('tx1').value);
S = 0;
X = 1;
for( i = 1; i <= N; i++)
{
X=X*i;
S=S+X;
}
$('tx4').value=S;
}