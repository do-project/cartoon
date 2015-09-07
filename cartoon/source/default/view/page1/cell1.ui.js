//related to cell1.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

var listview = ui("do_ListView_1");
var list_listdata = mm("do_ListData");
listview.bindItems(list_listdata);

//listview绑定数据，绑定事件，点击触发
list_listdata.addData([
                {template:0,"image":"source://image/71.png","name":"indifference","date":"8.24"},
                {template:1,"image":"source://image/image1.jpg"},
 {template:2,"zan":"123个赞","pinglun":"341个评论","image1":"source://image/51.png","image2":"source://image/52.png","image3":"source://image/53.png"},
                {template:0,"image":"source://image/72.png","name":"cross","date":"8.25"},
                {template:1,"image":"source://image/image2.jpg"},
{template:2,"zan":"23个赞","pinglun":"123个评论","image1":"source://image/51.png","image2":"source://image/52.png","image3":"source://image/53.png"}
                  
     ]);
  listview.refreshItems();
listview.on("pull", function(data) {
	    /**
	     * @此事件将会多次执行.
	     * @state == 0 : pull动作开始
	     * @state == 1 : pull动作持续中
	     * @state == 2 : pull动作结束
	     */
	  
	    if (data.state !== 2) return;
	    this.rebound();
	});