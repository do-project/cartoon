
//related to cell2.ui
var nf = sm("do_Notification");
 var app = sm("do_App");
var page = sm("do_Page");
 


//获取listview，绑定listdata
var listview = ui("do_ListView_1");
var list_listdata = mm("do_ListData");
listview.bindItems(list_listdata);

//listview绑定数据，绑定事件，点击触发
list_listdata.addData([
                {template:0},
                {template: 1,"image1":"source://image/16.png","image2":"source://image/17.png"},
                {template: 1,"image1":"source://image/18.png","image2":"source://image/19.png"},
                {template: 1,"image1":"source://image/110.png","image2":"source://image/111.png"},
                {template: 1,"image1":"source://image/112.png","image2":"source://image/113.png"},
                {template: 1,"image1":"source://image/114.png","image2":"source://image/115.png"},
                {template: 1,"image1":"source://image/116.png","image2":"source://image/117.png"},
                {template: 1,"image1":"source://image/118.png","image2":"source://image/119.png"},
                {template: 1,"image1":"source://image/120.png","image2":"source://image/121.png"},
                {template: 1,"image1":"source://image/122.png","image2":"source://image/123.png"},
                {template: 1,"image1":"source://image/124.png","image2":"source://image/125.png"}
     ]);
  listview.refreshItems();
  
