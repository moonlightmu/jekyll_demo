function init2(){
var i;
for(i=0;i<10;i++){
var photos=["mobile1.jpg","mobile2.jpg","mobile3.jpg","mobile4.jpg","mobile5.jpg","mobile6.jpg",
"mobile7.jpg","mobile8.jpg","mobile9.jpg","mobile10.jpg","mobile11.jpg"];

var img1=document.createElement("img");

var rand1=Math.floor(Math.random() * photos.length);
img1.setAttribute("src","../img/"+photos[rand1]);
alert(img1.style.src);

var section1=document.getElementById("main");
section1.appendChild(img1);

}
}

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

init2();

var button=document.getElementById("addButton");
button.onclick=handleButtonClick;

var button2=document.getElementById("Change");
button2.onclick=handleButtonClick2;
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
function handleButtonClick2(){
init2();
}