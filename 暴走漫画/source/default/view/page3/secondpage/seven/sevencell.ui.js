//related to sevencell.ui
var rootview, page;
rootview = ui("$");
page = sm("do_Page");
var do_DateTimePicker = sm("do_DateTimePicker");
rootview.setMapping({
	"do_ImageView_1.source":"image1",
	"do_ImageView_4.source":"image2",
	"do_ImageView_5.source":"image1"

});

var button1=ui("do_ImageView_6");

button1.on("touch",function(){
	
	button1.source="source://image/"
});

var button2=ui("do_ImageView_7");

button2.on("touch",function(){
	
	button2.source="source://image/"
});
var button3=ui("do_ImageView_8");

button3.on("touch",function(){
	
	button3.source="source://image/"
});