##SQL多重查询之inner join on

select a.name,b.name from a inner join b on a.id=b.id;
    
select a.name,b.name from a inner join b using(id);

## 别名关键字AS
    
select a.name,b.name from mismatch_topic as a 

inner join mismatch_category as b using(id)

inner join mismatch_response as c using(id) 
     
where a.name='Span';

## like %
like %ad % 包含ad 的<br/>
like %worker 结尾是worker<br/>
## explore 用空格、逗号、等分解字符串
$search_word=explore('','Tipper Cow');<br/>
分隔为tipper，cow单独存入数组中<br/>
## implode 串数组中加入词
$where_clause=implode('or',$wherelist);
<br/>在数组wherelist买个词后加入or
## str_replace 查找替换
str_replace(',','','hello,world!');<br/>
把hello,world换为hello world.
## substr 抽取子串
substr('asdf',begin,end)

## 分页
## 正则表达式