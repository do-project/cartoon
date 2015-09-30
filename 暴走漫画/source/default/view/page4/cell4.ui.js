//related to cell4.ui
var nf = sm("do_Notification");
 var app = sm("do_App");
var page = sm("do_Page");
var bg_layout = ui("bg_layout");
/******************************************************************************************/
//1 任务奖励
var  reward=ui("do_ALayout_2");
reward.on("touch",function(){
 
bg_layout.add("ewr", "source://view/page4/secondpage/reward.ui", 0, 0);
 
   	});
//2暴走小店
var  shop=ui("do_ALayout_3");
shop.on("touch",function(){
 
bg_layout.add("scd", "source://view/page4/secondpage/shop.ui", 0, 0);
 
   	});
//3神作消息
var  message=ui("do_ALayout_4");
message.on("touch",function(){
 
bg_layout.add("fed", "source://view/page4/secondpage/message.ui", 0, 0);
 
   	});
//4小纸条
var  paper=ui("do_ALayout_5");
paper.on("touch",function(){
 
bg_layout.add("wsdas", "source://view/page4/secondpage/paper.ui", 0, 0);
   	});
//5聊天室
var  paper=ui("do_ALayout_6");
paper.on("touch",function(){
 
bg_layout.add("ds", "source://view/page4/secondpage/talk.ui", 0, 0);
   	});