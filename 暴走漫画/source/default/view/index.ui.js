/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
 var nf = sm("do_Notification");
 var app = sm("do_App");
var page = sm("do_Page");
 

 //声明四个按钮，在主页中间展示
var button0=ui("do_alayout_4");
var button1=ui("do_alayout_5");
var button2=ui("do_alayout_7");
var button3=ui("do_ALayout_17");
var zhongyang=ui("do_ALayout_18");
var iv0=ui("do_imageview_1");
var iv1=ui("do_imageview_2");
var iv2=ui("do_imageview_4");
var iv3=ui("do_imageview_5");
var buttons = [ button0,button1,button2,button3 ];
var ivs= [iv0,iv1,iv2,iv3];
//中央按钮,按下出现新的一页
zhongyang.on("touchDown",function()
		{
	   zhongyang.source="source://image/anxia.png";
	
		});
zhongyang.on("touch",function()
		{
	   zhongyang.source="source://image/source://image/13.png";
	   app.openPage("source://view/page3/cell3.ui");
		});
		
var checkFun = function(index) {
	for (var i = 0; i < buttons.length; i++) {
		if (index == i) { // 表示选中了第几个
			 ivs[i].source = "source://image/d" + i + ".png";
			 
			 
		} else {
			 ivs[i].source = "source://image/s" + i + ".png";
			 
		}
	}

	viewShower.showView("view" + index, "fade", 300);
};

buttons.forEach(function(button, i) {
	button.on("touch", function(data, e) {
		checkFun(i);
		 
	});
});


var viewShower = ui("do_ViewShower_1");
var data = [ {
	"id" : "view0",
	"path" : "source://view/page1/cell1.ui"
}, {
	"id" : "view1",
	"path" : "source://view/page2/cell2.ui"
}, {
	"id" : "view2",
	"path" : "source://view/page4/cell4.ui"
}, {
	"id" : "view3",
	"path" : "source://view/page5/cell5.ui"
}  ];

viewShower.addViews(data);

viewShower.showView("view1");

//viewShower订阅一个viewChanged事件，当viewShower切换View 时触发
viewShower.on("viewChanged", function(data, e) {
	//触发一个自定义事件 indexChanged, 在view0中订阅该事件
//	page.fire("indexChanged");
	//触发一个带参数的自定义事件，data的值为：View切换后的id
	page.fire("indexChanged",data);
});

 

//翻页
page.on("back",function(){app.closePage()});