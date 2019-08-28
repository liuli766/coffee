//卡布基诺部分
var h3s=document.querySelectorAll(".capp .capp_left h3");
var cappContent=document.querySelectorAll(".content .capp_content");
console.log(cappContent);
for(var i=0;i<h3s.length;i++){
	h3s[i].onclick=function(){
		for(i=0;i<h3s.length;i++){
			h3s[i].setAttribute("class","");
		}
		this.setAttribute("class","active");
		var j=this.getAttribute("ll");
for(i=0;i<h3s.length;i++){
	cappContent[i].setAttribute("class","capp_content");
	cappContent[i].style.animation="";													
}
	cappContent[j].setAttribute("class","active capp_content");
	cappContent[j].style.animation="flip 1s";
	}
}
//团队部分
var pics=document.querySelectorAll(".capp_content_right_bottom .pic_list");
console.log(pics);
var capps=document.querySelectorAll(".content .capp_content");
console.log(capps);
for(var i=0;i<pics.length;i++){
	pics[i].onclick=function(){
		for(i=0;i<pics.length;i++){
			pics[i].setAttribute("class","pic_list");
		}
		this.setAttribute("class","active pic_list");
		var j=this.getAttribute("ll");
	for(var i=0;i<pics.length;i++){
			capps[i].setAttribute("class","capp_content");	
			capps[i].style.animation="";
			pics[i].style.animation="";														
			
	}
	capps[j].setAttribute("class","active capp_content");
	capps[j].style.animation="slideOutUp 1s";
	pics[j].style.animation="pulse 1s";
	}
}
//新闻中心部分
var continer=document.querySelectorAll(".contact .continer");
var h3s=document.querySelectorAll(".capp .capp_left h3");
for(var i=0;i<h3s.length;i++){//循环的目的是得到每个下标并且给每个元素绑定点击事件
	h3s[i].index=i;//存放当前所有元素的下标得到的值是0，1，2
	console.log(h3s[i].index);
	h3s[i].onclick=function(){
		for(var i=0;i<h3s.length;i++){			
			continer[i].className="continer"	;
//			h3s[i].className="";
		}
		console.log(this.index);
//		this.className="active";
//就能够获取当前元素的下标值，因为continer是个集合可以使用
		continer[this.index].setAttribute("class","active continer");
	}
}
//根数数据库生成页面

 var xhr=getXhr();

	//与服务器建立连接
	xhr.open("GET","about.php");
	//向服务器发送请求，如果是get请求，必须写为send(null)			
	xhr.send(null);
	//使用xhr监听事件
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			console.log(xhr.responseText);
			}
	}

















			function getXhr(){
				var xhr=null;
				if(XMLHttpRequest){
					xhr=new XMLHttpRequest();
				}else{
					xhr=new ActiveXObject("Microsoft.XMLHttp");
				}
				return xhr;
			}