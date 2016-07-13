function ClearForm(){
    document.form.reset();
}

$(".reset").click (function () {
	// alert("in");
	$("toggle").addClass("btn-default").removeClass("btn-primary");
});
