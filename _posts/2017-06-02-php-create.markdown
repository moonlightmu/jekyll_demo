## 客户端到服务器
* 通信发送端：通过html（a,form）的url，action设置发送信息的目的地。<br/>
* URL，就是地址http://.，然后进入www网络，搜索到对应的空间，将“请求”消息传到到服务器。<br/>
* 服务器：下发html，css文件到客户端，或者先执行一段程序再将结果返回客户端。<br/>

总的来说，就是一个消息发，收到以后，作出反馈。这是计算机网络的内容，属于将信息全双工通信的一个例子。为什么需要交换机，就是因为发展需要，对于全双工通信的需要。


## post到.php文件的网页
* POST：method="post"设置后在服务器对应一个$_POST变量，存放传递的所有数据变量，它是一个数组，通过$_POST['aaa']访问,aaa是html中name对应的值。<br/>

*  数据库连接:<br/>
    $dbc=mysqli_connect('localhost','root','','website')

* 数据库传递字符串：<br/>
    $query="insert into ....;";

* 数据库"查询":<br/>
    `mysqli_query($dbc,$query);`

* 数据库关闭：<br/>
     `mysqli_close($dbc);`

    

## while循环电路在.PHP
* while中查询表的一行数据作为条件，自动调用tonext()行，隐调用。
* php文件可以嵌套html，仅仅转换编译模式<?php?>是执行php编译，否则就是html。

    <?php
 
    while($row=mysqli_fetch_array($result)){

	echo '<input type="checkbox" value="'.$row['id'].'" 

    name="todelete[]"/>';
	
    echo $row['first_name'];
	
    echo $row['last_name'];
	
    echo $row['email'];
	
    echo '<br/>';

    ?>


## if-else-if避免嵌套的写法
    if(){if(){if()}}}
这个是and条件语句，改为&& and 都可以<br/>

    if(){}if(){}
这个是or条件语句，改为|| or，都可以<br/>

* 00,10,01,11,直接写4个if条件语句，就可以避免2个条件判断的复杂嵌套
* 000,001,010,011,100,101,110,111，直接写8个if条件语句，可以避免3个条件判断的复杂嵌套。

## 获得数据库的一行

    while($row=mysqli_fetch_array($result)){

    $first_name=$row['first_name']; 

##.php文件中action调用自己

    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
    
* 检测是否提交

    $set=$_POST['submit'];

    if(isset($set)){


## 复选框

    echo '<input type="checkbox" value="'.$row['id'].'" name="todelete[]"/>';

   * 选择复选框的数组元素，循环foreach
   
    `foreach($_POST['todelete'] as $delete_id){`


   
    
