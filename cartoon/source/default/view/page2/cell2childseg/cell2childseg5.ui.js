var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

ui("$").setMapping({
 
	
});

var do_SlideView_1 = ui("do_SlideView_1");
var slide_listdata = mm("do_ListData");
do_SlideView_1.bindItems(slide_listdata);

//listview绑定数据，绑定事件，点击触发
slide_listdata.addData([
{template:0,"text":"秒天秒地的龙傲天式角色","image":"source://image/q1.jpg"},
{template:1,"text":"秒天秒地的龙傲天式角色","image":"source://image/q2.jpg"},
{template:2,"text":"秒天秒地的龙傲天式角色","image":"source://image/q3.jpg"}
 
]);
do_SlideView_1.refreshItems();
  
var i=1;
var timer01 = mm("do_Timer");
timer01.delay = 243;
timer01.interval = 1000;

var DURATION01 = 0;

timer01.on("tick", function(){
    if(DURATION01 >3){
        DURATION01 = 0;
        do_SlideView_1.index=i%3;
        i++;
    }
    DURATION01++;
});
timer01.start();
 