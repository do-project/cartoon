//related to down.ui

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
/******************************************************************************************/

//管理
var ziti=ui("do_Label_2");
var guanli=ui("do_ALayout_3");
  ziti.fontColor="000000FF"
guanli.on("touch",function(){
	//设置字体颜色
	 
	if(ziti.fontColor=="FF0000FF")
   ziti.fontColor="000000FF";
	else
   ziti.fontColor="FF0000FF";	
	//显示”全选“与”删除“
	
	
});

/******************************************************************************************/


//获取segmentview，绑定listdata
var do_segmentview_1 = ui("do_SegmentView_1");
var segment_listdata = mm("do_ListData");
do_segmentview_1.bindItems(segment_listdata);

//获取slideview，绑定listdata
var do_slideview_1 = ui("do_SlideView_1");
var slide_listdata = mm("do_ListData");
do_slideview_1.bindItems(slide_listdata);
 //segmentview绑定数据，绑定事件，点击触发
segment_listdata.addData([{template: 0,"text":"视频","color":"FF0000FF"},
    {template:0,"text":"系列","color":"00000000"},
    {template: 0,"text":"图书","color":"00000000"}] );

do_segmentview_1.refreshItems();


do_segmentview_1.on("indexChanged", function(index){
    do_slideview_1.set({index: index});
});

/******************************************************************************************/
//slideview绑定数据，绑定事件，滑动触发
do_slideview_1.index=1;
slide_listdata.addData([ {template: 0},
     {template: 1},{template: 2}  ]);

do_slideview_1.refreshItems();


 do_slideview_1.on("indexChanged", function(index){

   do_segmentview_1.set({index: index});
     
 });
 
 /******************************************************************************************/
 //关闭页面
 var bg_layout = ui("bg_layout");
 var fanhui=ui("do_ALayout_2");
 
 fanhui.on("touch",function(){
	  	bg_layout.remove();
 });
 
 page.on("back",function(){bg_layout.remove()});
  
  

 