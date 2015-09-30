//related to shop.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
/******************************************************************************************/
//关闭页面
var bg_layout = ui("bg_layout");
var fanhui=ui("do_ALayout_2");

fanhui.on("touch",function(){
	  	bg_layout.remove();
});

page.on("back",function(){bg_layout.remove()});
/******************************************************************************************/
//绑定listview
 
var listview = ui("do_ListView_1");
var list_listdata = mm("do_ListData");
listview.bindItems(list_listdata);

list_listdata.addData([
                 
                {template:0},             
     ]);
  listview.refreshItems();