//related to set.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
/******************************************************************************************/
//关闭页面
var bg_layout = ui("bg_layout");
var fanhui=ui("12");

fanhui.on("touch",function(){
	  	bg_layout.remove();
});

page.on("back",function(){bg_layout.remove()});

//按钮
var btn1=ui("do_ALayout_3");
var img1=ui("do_ImageView_2");
img1.source="source://image/second12.png";
btn1.on("touch",function(){
	if(img1.source=="source://image/second12.png")
	  img1.source="source://image/second13.png";
	else 
		img1.source="source://image/second12.png";	
		});
	
var btn2=ui("do_ALayout_4");
var img2=ui("do_ImageView_3");
img2.source="source://image/second13.png";
btn2.on("touch",function(){
	if(img2.source=="source://image/second12.png")
	  img2.source="source://image/second13.png";
	else 
		img2.source="source://image/second12.png";	
		});
		

var btn3=ui("do_ALayout_5");
var img3=ui("do_ImageView_4");
img3.source="source://image/second13.png";
btn3.on("touch",function(){
	if(img3.source=="source://image/second12.png")
	  img3.source="source://image/second13.png";
	else 
		img3.source="source://image/second12.png";	
		});




		