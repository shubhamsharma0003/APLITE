    function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    console.log(e);
                    $('#blah')
                        .attr('src', e.target.result)
                        .width(300)
                        .height(150);
                };

                reader.readAsDataURL(input.files[0]);
            }
    }