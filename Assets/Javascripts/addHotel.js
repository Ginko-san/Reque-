 $().ready(function() {
     $('select').material_select();

     $("#formValidate").validate({
         rules: {
             uname: {
                 required: true,
                 minlength: 2
             },
             id: {
                 required: true,
                 minlength: 9,
                 nowhitespace: true,
                 maxlength: 9,
                 number: true
             },
             phone: {
                required: true,
                minlength: 8,
                 maxlength: 8,
                 nowhitespace: true,
                 number: true
             },
             description: {
 				required: true
            },
            address: {
				required: true,
				minlength: 15
            },
         },
         //For custom messages
         messages: {

             uname:{
                 required: "Ingrese su nombre",
                 minlength: "Ingrese mínimo 2 carácteres"
             },
             id:{
                 required: "Ingrese su identificación",
                 minlength: "Ingrese mínimo 9 carácteres",
                 maxlength: "Ingrese máximo 9 carácteres",
                 number: "Ingrese solo carácteres numéricos",
                 nowhitespace: "Por favor remueva los espacios en blanco"
             },
             phone:{
                 required: "Ingrese un número telefónico",
                 minlength: "Ingrese mínimo 8 carácteres",
                 maxlength: "Ingrese maximo 8 carácteres",
                 nowhitespace: "Por favor remueva los espacios en blanco"
             },
             description:{
                 required: "Ingrese una descripción "
             },
             address:{
                 required: "Ingrese una dirección exacta",
                 minlength: "Ingrese mínimo 15 carácteres",
             },
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
