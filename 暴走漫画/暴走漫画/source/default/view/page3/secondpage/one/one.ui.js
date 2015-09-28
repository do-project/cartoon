 
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
 /******************************************************************************************/
 //绑定数据
 var listview = ui("do_ListView_1");
 var list_listdata = mm("do_ListData");
 listview.bindItems(list_listdata);

 list_listdata.addData([
                  
                 {template:0},{template:0}, {template:0}, {template:0}, {template:1}           
      ]);
   listview.refreshItems();