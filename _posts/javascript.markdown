#大热身，熟悉
#from ...to html5
1. !DOCTYPE html
2. meta charset="UTF-8"
3. link rel="stylesheet" href="total.css"
4. script src="man.js"
5. script
    var a=true;
   /script

------
#test-varibale
1. var isEligible=false
   <br>*布尔值变量用is+n/adj作为名字*
2. var winners=2
3. var name="Dr.Evil"
   <br>*创建一个字符串变量，她往往是一个名词，人，物体*
4. var boilingPt=232.0
5. caml case多词变量名：var twoHeadedDragonWithFire;
6. 避开保留字：export , native, synchronized,transient,throws,instanceof,implements,goto,enum;
7. 用有意义的名词，虽然在计算中会比较不容易看清楚规律，但是容易逻辑清楚，调理分明

---
#test-litte function-表达式
（9/5）*tempC+32;
Math.random()*10;
2.123+3.2;
2>3;
tempF<75;
pet=="duck";
"super"+"cali"+youKnowTheRest
"March"+"21"+"st"
toWrite(e)//function toWrite(..){}

---
#do it
10. var y=(x=5);
11. var scoops=10;
12. var scoops=totalScoops/people;
13. var scoops=Math.random();
14. scoops=scoops*10;
15. scoops="Tired of being an integer";
16. scoops=null;//空值
17. var winnwer;//undefined;
19. var $apple="appone";
20. var _fruit="orange";
22. var my3sons;//第一个后面可有数字，字母，美元
23. var cost$;//第一个后面可有数字，字母，美元
24. var vitaminB12;//第一个后面可有数字，字母，美元
26. 可以这样包含保留字，var ifOnly;

---
#每次一点，直到做完
while(s){
do...
}
for(){
do...
}

---

#DOM
document->html->:head,body
head->:meta,title,link,script
body->:div(.navigation),div(.cover>),
div.navigation->ul:li,li,li,li
li->:img
li->:a
li->:a
li->:a
div.cover->:div(.cover-row),div(.cover-row)
div（.cover-row)->:div(#myphoto),div(#cover-head)
div(.cover-row)->:div(.cover-id),div(.cover-id)
div(#myphoto)->:img,h1,h1
div(#cover-head)->:h1
div(.cover-id)->ul
ul->:postlist,li
li->h2
div(.cover-id)->:paginator,section

---

#对象连接
window对象是全局对象<br>
document对象就是普通对象例如ul对象连接整合为一个Dom对象，连接方式：<br>
1. 属性为一个函数 其中onload属性指向一个函数<br>
2. 属性为一个对象 document属性指向一个对象document<br>
3. 方法调用一个对象，通过节点关系，子孙，父子