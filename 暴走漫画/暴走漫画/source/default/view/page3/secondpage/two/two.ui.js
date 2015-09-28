//related to two.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
/******************************************************************************************/
//关闭页面
var close=ui("do_ALayout_2");
page.on("back",function(){app.closePage()});
 close.on("touch",function(){
	app.closePage()
  });
 /******************************************************************************************/
 //绑定数据
 var listview = ui("do_ListView_2");
 var list_listdata = mm("do_ListData");
 listview.bindItems(list_listdata);

 list_listdata.addData([
                  
                 {template:0,"image1":"source://image/two1.png","text1":"绝命毒师",
                	 "image2":"source://image/two2.png","text2":"小郭说书","image3":"source://image/two3.png","text3":"冯老师上课"},    
                 {template:0,"image1":"source://image/two4.png","text1":"妈妈再扇我一次",
                    "image2":"source://image/two5.png","text2":"泰囧","image3":"source://image/two6.png","text3":"盗梦空间"}, 
                 {template:0,"image1":"source://image/two7.png","text1":"爸爸与儿子",
                     "image2":"source://image/two8.png","text2":"好老婆","image3":"source://image/two9.png","text3":"社交网络"},
                 {template:0,"image1":"source://image/two4.png","text1":"妈妈再扇我一次",
                       "image2":"source://image/two5.png","text2":"泰囧","image3":"source://image/two6.png","text3":"盗梦空间"}   
      ]);
   listview.refreshItems();
