function init2()
{
var i;
var j;
for(j=0;j<3;j++){
for(i=0;i<10;i++){
var photos=["mobile1.jpg","mobile2.jpg","mobile3.jpg","mobile4.jpg","mobile5.jpg","mobile6.jpg","mobile7.jpg","mobile8.jpg","mobile9.jpg","mobile10.jpg","mobile11.jpg","head1.jpg","head2.jpg","head3.jpg","head4.jpg","photo.jpg","mobile9 (1).jpg","mobile9 (6).jpg","mobile9 (7).jpg","mobile9 (8).jpg","mobile9 (9).jpg","mobile9 (10).jpg","mobile9 (11).jpg","mobile9 (12).jpg","mobile9 (15).jpg","mobile9 (16).jpg","mobile9 (17).jpg","mobile9 (18).jpg","mobile9 (19).jpg","mobile9 (20).jpg","mobile9 (21).jpg","mobile9 (22).jpg","mobile9 (23).jpg","mobile9 (24).jpg","mobile9 (25).jpg","mobile9 (26).jpg","mobile9 (27).jpg","mobile9 (28).jpg","mobile9 (29).jpg","mobile9 (30).jpg","mobile9 (31).jpg","mobile9 (32).jpg","mobile9 (33).jpg","mobile9 (34).jpg","mobile9 (35).jpg","mobile9 (36).jpg","mobile9 (37).jpg"];
	
var preDiv=document.createElement("div");
preDiv.setAttribute("id","mains");

var headDiv=document.getElementById("tableRow");
headDiv.appendChild(preDiv);
var img1=document.createElement("img");
var div1=document.createElement("div");
var p1=document.createElement("p");

var rand1=Math.floor(Math.random() * photos.length);
img1.setAttribute("src","../img/"+photos[rand1]);
div1.setAttribute("id","container");
p1.innerHTML=photos[rand1];

div1.appendChild(p1);


var section1=document.getElementById("mains");
section1.appendChild(img1);
section1.appendChild(div1);
if(i==9){
section1.setAttribute("id","main");
    }
}
}
}
function displayLocation(position){
var latitude=position.coords.latitude;
var longitude=position.coords.longitude;
var div=document.getElementById("location");
div.innerHTML="you are at latitude:"+latitude+",longitude:"+longitude;
}
function displayError(error){}
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
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(displayLocation,displayError);
}
else{
alert("oops,no geolocation support");
}
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