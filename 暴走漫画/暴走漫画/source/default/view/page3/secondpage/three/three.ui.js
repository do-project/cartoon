//related to three.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
/******************************************************************************************/
//关闭页面
var close=ui("do_ALayout_2");
page.on("back",function(){app.closePage()});
 close.on("touch",function(){
	app.closePage()
  });