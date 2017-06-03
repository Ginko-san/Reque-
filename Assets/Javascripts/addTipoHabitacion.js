$().ready(function() {
    $('select').material_select();

    $("#formValidate").validate({
        rules: {
            tipo: {
                required: true
            },
            description: {
               required: true
           }
        },
        //For custom messages
        messages: {

            tipo:{
                required: "Ingrese un tipo de habitación"
            },
            description:{
                required: "Ingrese una descripción "
            }
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });
});
