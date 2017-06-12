$().ready(function() {
    $('select').material_select();

    $("#formValidate").validate({
        rules: {
            num_tipo: {
                required: true
            },
            nombre: {
                required: true
            },
            description: {
               required: true
           }
        },
        //For custom messages
        messages: {

            num_tipo:{
                required: "Ingrese un número tipo "
            },
            nombre:{
                required: "Ingrese un nombre tipo"
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
