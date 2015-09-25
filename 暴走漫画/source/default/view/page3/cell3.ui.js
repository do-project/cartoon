//related to cell1.ui

var nf = sm("do_Notification");
 var app = sm("do_App");
var page = sm("do_Page");
 
var close=ui("do_ALayout_2");

//翻页
  page.on("back",function(){app.closePage()});
   close.on("touch",function(){
	app.closePage()
    });

