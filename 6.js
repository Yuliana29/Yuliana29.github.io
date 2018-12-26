function Complex(x,y)
{
this.x=x;
this.y=y;
this.real=_Complexreal;
this.image=_Compleximage;
this.add=_Complexadd;
this.toString=_ComplextoString;
}

function _Complexreal()
{
return(this.x)?this.x:0;
}

function _Compleximage()
{
return (this.y)?this.y:0;
}

function _ComplextoString()
{
str=(this.image()<0)?"":"+"
return this.real()+str+this.image()+'i';
}

function _Complexadd()
{
var x=new Complex();
x.real()=5;
x.image()=5;
return x;
}


var x1=new Complex(2);
var x2=new Complex();
var x3=new Complex(0,-5);
var x4=new Complex(-2,-5);
document.write(x1+'<br>'+x2+'<br>'+x3+'<br>'+x4+'<br>');
x2=x4.add();
document.write(x2);
/*
public static void main(String[] a)
{
Complex C1=new Complex(4,8);
Complex C2=new Complex(5,7);
Complex C3=new Complex();
C3=C3.AddComplex(C1,C2);
System.out.println("SUM:" + C3.Real +"+i" + C3.Imag);
}
*/