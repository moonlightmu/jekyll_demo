function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}
	else{
		return obj.getComputedStyle(obj,false)[name];
	}	
}
function startMove(obj,attr,iTarget){	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var cur;
		if(attr=='opacity'){
		 cur=parseFloat(getStyle(obj,attr))*100;
		}else
		 cur=parseInt(getStyle(obj,attr));

		speed=(iTarget-cur)/10;
	    if(speed>0)
		{speed=Math.ceil(speed);}
		else
		{
			speed=Math.floor(speed);
		}
	    
		if(cur==iTarget||speed==0){
			clearInterval(obj.timer);
		}
		else{
					
			if(attr=='opacity'){
				
			   //ie
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				//ff,chrome
					obj.style.opacity=(cur+speed)/100;
			}
			obj.style[attr]=cur+speed+'px';
			document.title=cur+","+speed;
		}	
	},30);	
}