//related to cell1.ui

var nf = sm("do_Notification");
 var app = sm("do_App");
var page = sm("do_Page");
 
var close=ui("do_ALayout_2");
/****************************************************************************************************/
//翻页
  page.on("back",function(){app.closePage()});
   close.on("touch",function(){
	app.closePage()
    });
/***************************************************************************************************/
var button1=ui("do_ALayout_12");
var button2=ui("do_ALayout_21");
var button3=ui("do_ALayout_14");
var button4=ui("do_ALayout_15");
var button5=ui("do_ALayout_16");
var button6=ui("do_ALayout_17");
var button7=ui("do_ALayout_18");
var button8=ui("do_ALayout_19");
var button9=ui("do_ALayout_20");


//点击按钮打开对应页面
button1.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/one/one.ui");
		});
button2.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/two/two.ui");
		});
button3.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/three/three.ui");
		});
button4.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/four/four.ui");
		});
button5.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/five/five.ui");
		});
button6.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/six/six.ui");
		});
button7.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/seven/seven.ui");
		});
button8.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/eight/eight.ui");
		});
button9.on("touch",function()
		{
	app.openPage("source://view/page3/secondpage/nine/nine.ui");
		});



