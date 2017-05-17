/**
 * 
 */
var data=new Array("1","2","3");
var datab={
one:"one",
two:"two",
three:"three"	
}
/**/
/*检测email字段格式*/
function validate_required(field,alerttxt){
	with(field)
	{
		apos=value.indexOf("@");
		dotpos=value.lastIndexOf(".");
		if(apos<1||dotpos-apos<2)
			{
			alert(alerttxt);
			return false;
			}
		else{
			return true;
		}
	}
}
function validate_form(thisform){
	with(thisform){
		if(validate_required(email,"Not a valid e-mail address!")==false)
			{		
			email.focus();
			return false;
			}
	}	
}
/*改变email背景色*/
function change(x){
	x.style.background="yellow";
	
}
/*改变form字体颜色*/
function docp(){
document.getElementById("demo").innerHTML=data[1];
document.getElementById("demo").style.color="red";
}
/*改变p字体颜色*/
function dscp(){
document.getElementById("oneo").innerHTML="zhouxiaomu";
document.getElementById("oneo").style.color="red";
}

/*创建一个person对象*/
var person=new Object();
person.firstname="bill";
person.lastname="zhou";
person.age="12";
person.eyecolor="blue";
/*创建一个girl对象*/
function girl(firstname,lastname,age,eyecolor){
	this.firstname=firstname;//this.属性
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;
	function changename(name){
		 this.lastname=name;
	}
   this.changename=changename;//this.属=函数名
   function forthis()
   {
	   var txt="";
	   var x;
	   for(x in zhouxiaomu)
	   {
		   txt=txt+zhouxiaomu[x];
	   }  
	   this.lastname=txt+location.href;
   }
       this.forthis=forthis;
 }

var zhouxiaomu=new girl("zhou","xiaomu","12","brown");
var love=new girl("love","zhou","12","brown");
/*创建一个数字对象*/
var myNum=new Number(32.3);

/*创建节点，form1中插入3个DOM子节点，分别用到上面3个对象实例的属性*/
var tt;
function createnode(){
	var para=document.createElement("p");
	var node=document.createTextNode("picture");
	para.appendChild(node);
	para.id="word";
	var element=document.getElementById("form1");
	element.appendChild(para);
	var tt=setTimeout("timedCount()",0);
}

var t;//非常重要，一定要设定在函数外
var c=0;
var word=new Array("我一直追寻着你心情的足迹","然后我在终点等你","让所有人的误解，都要理解你","装备好当擦亮你天际的浮云","你却在终点等我","笑里有雨滴");
word.push("-love-love-love","no matter what you do","i will believe so");

/*计时器时间设定数组遍历*/
function timedCount(){
	
	document.getElementById("word").innerHTML=word[c%word.length];
		c=c+1;
	t=setTimeout("timedCount()",1000);
}




/*获取cookie*/
function getCookie(c_name)
{
  if (document.cookie.length>0)
 { 
    c_start=document.cookie.indexOf(c_name + "=");
    if (c_start!=-1)
       { 
         c_start=c_start + c_name.length+1;
         c_end=document.cookie.indexOf(";",c_start);
         if (c_end==-1) c_end=document.cookie.length;
         return unescape(document.cookie.substring(c_start,c_end));
       } 
  }
   return "";
}
/*设置cookie*/
function setCookie(c_name,value,expiredays)
{
   var exdate=new Date();
   exdate.setDate(exdate.getDate()+expiredays);
   document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}

/*检查cookie*/
function checkCookie()
{
   username=getCookie('username');
   if (username!=null && username!="")
  {
	  alert('Welcome again '+username+'!');
  }
   else 
  {
      username=prompt('Please enter your name:',"");
   if(username!=null && username!="")
    {
      setCookie('username',username,365);
    }
  }
}
function picturn{
body.getElementById(4).src="{{ site.url }}{{ site.baseurl }}/img/4-450.jpg }}";
}


