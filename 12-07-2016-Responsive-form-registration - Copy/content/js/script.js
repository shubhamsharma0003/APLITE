function ClearForm(){
    document.form.reset();
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// FUNCTION FOR LOADING IMAGE INTO HTML AFTER IT GETS UPLOADED
function readURL(input) {
   if (input.files && input.files[0]) {
       var reader = new FileReader();
       
       reader.onload = function (e) {
           $('#thumbnail').attr('src', e.target.result);
       };
       
       reader.readAsDataURL(input.files[0]);
   	}
}
    
$("#imgInp").change(function(){
    readURL(this);
});
// END OF FUNCTION FOR LOADING IMAGE INTO HTML AFTER IT GETS UPLOADED

// ---------------------------------------------------------------------------------------------------------------------