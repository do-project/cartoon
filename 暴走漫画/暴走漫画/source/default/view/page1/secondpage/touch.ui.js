//related to touch.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var close=ui("bg");

close.on("touch",function()
{
	app.closePage();
 
});
 page.on("back",function(){app.closePage()});
 var close1=ui("do_ListView_1");

 close1.on("touch",function()
 {
 	app.closePage();
  
 });
var listview = ui("do_ListView_1");
var list_listdata = mm("do_ListData");
listview.bindItems(list_listdata);

var zhaopian=page.getData();

list_listdata.addData([                      
       {template:0, "source":zhaopian}                
            ]);

listview.refreshItems();

