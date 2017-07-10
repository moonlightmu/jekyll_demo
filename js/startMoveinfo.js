function startMove(obj,iTarget){	
	var speed;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		speed=iTarget>0?3:-3;
		if(obj.offsetLeft>=700||speed==0){
			clearInterval(obj.timer);
		}
		else{
			speed=(iTarget-obj.offsetLeft)/7;
			    if(speed>0)
				{speed=Math.ceil(speed);}
				else
				{speed=Math.floor(speed);
				}		
			obj.style.left=obj.offsetLeft+speed+'px';
			document.title=obj.offsetLeft+","+speed;
		}	
	},30);	
}