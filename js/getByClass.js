function getByClass(oParent,sClass){
	var aResult=[];
	var aEle=oParent.getElementsByTagName('*');
	
	for(var j=0;j<aEle.length;j++){
		if(aEle[j].className==sClass){
			aResult.push(aEle[j]);
		}
		
	}
	return aResult;	
}