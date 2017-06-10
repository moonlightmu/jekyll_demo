function init(){
var phraseElement1=document.getElementById("phrase1");
var phraseElement2=document.getElementById("phrase2");
var wordSet1=["Java","Css","Javascript","C","Html","Php"];
var wordSet2=["Love","Happy","Healthy","Money","Courage"];
var rand1=Math.floor(Math.random() * wordSet1.length);
var rand2=Math.floor(Math.random() * wordSet2.length);
var phrase1=wordSet1[rand1];
var phrase2=wordSet2[rand2];
phraseElement1.innerHTML=phrase1;
phraseElement2.innerHTML=phrase2;


var button=document.getElementById("addButton");
button.onclick=handleButtonClick;




}
window.onload=init;

function handleButtonClick(){
var textInput=document.getElementById("songTextInput");
var songName=textInput.value;

var li=document.createElement("li");
li.innerHTML=songName;

var ul=document.getElementById("playlist");
ul.appendChild(li);

}