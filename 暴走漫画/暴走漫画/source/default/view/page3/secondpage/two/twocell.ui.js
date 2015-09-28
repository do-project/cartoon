//related to twocell.ui
var rootview, page;
rootview = ui("$");
page = sm("do_Page");
var do_DateTimePicker = sm("do_DateTimePicker");
rootview.setMapping({
	"do_ImageView_1.source":"iamge1",
	"do_Label_1.text":"text1",
    "do_ImageView_2.source":"iamge2",
	"do_Label_2.text":"text2",
	"do_ImageView_3.source":"iamge3",
	"do_Label_3.text":"text3"
})