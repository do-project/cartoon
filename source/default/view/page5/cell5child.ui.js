//related to cell5child.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var bg_layout = ui("bg_layout");
/******************************************************************************************/
 
//1我的神作
  var mywork=ui("do_ALayout_4");
  mywork.on("touch",function(){
//     		lbg.add("source://view/wendu.ui");
  bg_layout.add("ewr", "source://view/page5/secondpage/mywork/mywork.ui", 0, 0);
//     		app.openPage("source://view/wuran.ui");
     	});
      
//2我关注的系列    	
  var myattention=ui("do_ALayout_5");
  myattention.on("touch",function(){
//     		lbg.add("source://view/wendu.ui");
  bg_layout.add("dfsg", "source://view/page5/secondpage/myattention/myattention.ui", 0, 0);
//     		app.openPage("source://view/wuran.ui");
     	});   	
  
 //3我赞过的
  var myapport=ui("do_ALayout_6");
  myapport.on("touch",function(){
//     		lbg.add("source://view/wendu.ui");
  bg_layout.add("as", "source://view/page5/secondpage/myapport/myapport.ui", 0, 0);
//     		app.openPage("source://view/wuran.ui");
     	});  
//4找好友
  var findfriend=ui("do_ALayout_7");
  findfriend.on("touch",function(){
//     		lbg.add("source://view/wendu.ui");
  bg_layout.add("gf", "source://view/page5/secondpage/findfriend/findfriend.ui", 0, 0);
//     		app.openPage("source://view/wuran.ui");
     	});  
  
//5离线下载
  var down=ui("do_ALayout_8");
  down.on("touch",function(){
//     		lbg.add("source://view/wendu.ui");
  bg_layout.add("erf", "source://view/page5/secondpage/down/down.ui", 0, 0);
//     		app.openPage("source://view/wuran.ui");
     	});
 //6设置

  var set=ui("do_ALayout_9");
  set.on("touch",function(){
//     		lbg.add("source://view/wendu.ui");
  bg_layout.add("vcxv", "source://view/page5/secondpage/set/set.ui", 0, 0);
//     		app.openPage("source://view/wuran.ui");
     	});
  