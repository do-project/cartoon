//related to seven.ui
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
                  
                 {template:0,"image1":"source://image/two1.png",
                	 "image2":"source://image/two2.png","image3":"source://image/two3.png"},    

                     {template:0,"image1":"source://image/two1.png",
                    	 "image2":"source://image/two2.png","image3":"source://image/two3.png"},   

                         {template:0,"image1":"source://image/two1.png",
                        	 "image2":"source://image/two2.png","image3":"source://image/two3.png"},   

                             {template:0,"image1":"source://image/two1.png",
                            	 "image2":"source://image/two2.png","image3":"source://image/two3.png"}
               
      ]);
   listview.refreshItems();
