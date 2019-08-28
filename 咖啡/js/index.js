var as=document.querySelectorAll("header nav a");
for(var i=0;i<as.length;i++){
	as[i].onclick=function(){
		for(var i=0;i<as.length;i++){
			as[i].className="";
		}
		this.className="active";
	}	
}
//滚动监听
$(document).scroll(()=>{
		var top=$(document).scrollTop();
		var elemTop=$(".head").offset().top;		
console.log(elemTop)
		if(top>180){
			$(".head").css({
				"position":"fixed",
				"top":0,
				"boxShadow":"0px -2.5px 5px inset",
			})
		}else{
			$('.head').css({
				"position":"static",
				"top":0,
				"boxShadow":"",
			})
		}
})
