//related to cell1list2.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

ui("$").setMapping({
	"do_ImageView_1.source":"image"
     
});
var photo=ui("do_ImageView_1");
var button=ui("bg");
button.on("touch",function()
		{
	
	
	  
	app.openPage({source:"source://view/page1/secondpage/touch.ui", data:photo.source, animationType:"fade", 
		 isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});

	 
	
		})
		
