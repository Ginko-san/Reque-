 $().ready(function() {
     $('select').material_select();

     $('.datepicker').pickadate({
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15, // Creates a dropdown of 15 years to control year
       format: 'yyyy-mm-dd'
     });

     $("#formValidate").validate({
         rules: {
             id: {
                 required: true,
                 minlength: 9,
                 nowhitespace: true,
                 maxlength: 9,
                 number: true
             },
             initialDate: {
                 required: true
             },
             endedDate: {
                 required: true
             }

         },
         //For custom messages
         messages: {
             id:{
                 required: "Ingrese su identificación",
                 minlength: "Ingrese mínimo 9 carácteres",
                 maxlength: "Ingrese máximo 9 carácteres",
                 number: "Ingrese solo carácteres numéricos",
                 nowhitespace: "Por favor remueva los espacios en blanco"
             },
             initialDate:{
                 required: "Ingrese una fecha de inicio"
             },
             endedDate:{
                 required: "Ingrese una fecha de fin"
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
