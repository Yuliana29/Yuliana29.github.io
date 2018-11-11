﻿﻿function $()

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



function f(x)
	
		{
		
			var st = "qwertyuiopasdfghjklzxcvbnm1234567890_.@";
		
			var mass = x.split('@');
		
			f = "Okay";
		
			if(mass.length==2)
		
				{
			
				for(i=0;i<x.length;i++)
			
					{
			
					if(st.indexOf(x.charAt(i))<0)
			
					f="False";
			
					}
		
				}
		
			else
			
				f="Fail";
		
				return f;
		

}