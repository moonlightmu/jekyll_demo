function getPos(oEvent){
var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
return {x: oEvent.clientX+scrollLeft,y: oEvent.clientY+scrollTop};
	
}