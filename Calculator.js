window.onload=initialize;

function initialize()
	{
		box=document.getElementById('display');	
	}

function toscreen(x)
	{
	if (x ==='C')
	{ 
	box.value=' ';
	}
	else if ( x==='Sq')
	{
		y=box.value;
		y=eval(y*y);
		box.value=y;
	}
	else 
		box.value+=x;	
	}

function backSpace()
{
	num = box.value;
	len = num.length -1;
	newNum = num.substring(0,len);
	box.value=newNum;
}
	
function answer()
	{
	 y=box.value;
	 x=eval(y); 
	 box.value=x;
	}
	







