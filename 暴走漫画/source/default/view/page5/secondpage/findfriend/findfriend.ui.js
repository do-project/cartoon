//related to findfriend.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
/******************************************************************************************/
//关闭页面
var bg_layout = ui("bg_layout");
var fanhui=ui("do_ALayout_5");

fanhui.on("touch",function(){
	  	bg_layout.remove();
});

page.on("back",function(){bg_layout.remove()});