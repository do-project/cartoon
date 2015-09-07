//related to cell5.ui
var nf = sm("do_Notification");
 var app = sm("do_App");
var page = sm("do_Page");
var listview = ui("do_ListView_1");
var list_listdata = mm("do_ListData");
listview.bindItems(list_listdata);
list_listdata.addData([
                       {template:0}
                  ]);
     listview.refreshItems();
