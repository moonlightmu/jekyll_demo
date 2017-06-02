#mismatchuser
*在mismatchuser中，数据库文件没有说上传，主要是Php*
###Mismatchuser的功能：
1.	可以注册用户，记住用户，编辑用户资料，修改用户资料，浏览自己的资料，可以用于人员信息管理，物品管理

###Mismatchuser网站现在的问题：
1.	用手机链接本地的Ip网页，可以访问成功，但是页面依旧是电脑版本的，不适应手机用户。

###Session+cookie
1.	session_start()是一条设置的通路
2.	$_session[‘username’]可以访问变量
3.	Session_name()是cookie名字
4.	$_Session=array();是清空变量
5.	Session_destroy()是一个取消，就是不再使用这里变量在网页中
