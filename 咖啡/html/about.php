<?php
	header("Content-Type:text/html; charset=utf-8");
	//连接数据库做操作
	$conn=mysqli_connect("127.0.0.1","root","","coffee",3306);
	//插入数据库
	$sql="INSERT INTO woman VALUES(0,'tyh',123123)";
	//设置编码格式
	mysqli_query($conn,"SET NAMES UTF8");
	//执行操作
	$bool=mysqli_query($conn,$sql);
	//断开当前连接
	var_dump($bool);
//	mysqli_close($conn);
?>