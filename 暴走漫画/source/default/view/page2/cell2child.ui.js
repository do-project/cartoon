//related to cell2child.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

ui("$").setMapping({
	
     
});

//获取segmentview，绑定listdata
var SegmentView = ui("do_SegmentView_2");
var SegmentView_listdata = mm("do_ListData");
SegmentView.bindItems(SegmentView_listdata);

//segmentview绑定数据，绑定事件，点击触发
SegmentView_listdata.addData([  {template:0},
                          {template:1},
                          {template:2},
                          {template:3},
                          {template:4}     
     ]);
SegmentView.refreshItems();
  