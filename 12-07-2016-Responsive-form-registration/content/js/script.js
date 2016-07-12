function ClearForm(){
    document.form.reset();
}

$(".reset").click (function () {
	alert("in");
	$("#subscribe").removeAttr("checked");
});
