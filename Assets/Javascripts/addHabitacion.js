 $().ready(function() {
     $('select').material_select();

     $("#formValidate").validate({
         rules: {
             numero: {
                required: true
             },
             description: {
 				required: true
             }
         },
         //For custom messages
         messages: {

            numero:{
                 required: "Ingrese el número de la habitación"
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
