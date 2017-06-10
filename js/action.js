function init(){
var phraseElement=document.getElementById("phrase");
var wordSet1=["Java","Css","Javascript","C","Html","Php"];
var wordSet2=["love","happy","healthy","money","courage"];
var rand1=Math.floor(Math.random() * wordSet1.length);
var rand2=Math.floor(Math.random() * wordSet2.length);
var phrase=wordSet1[rand1]+""+wordSet2[rand2];
var phraseElement.innerHTML=phrase;

}
window.onload=init;