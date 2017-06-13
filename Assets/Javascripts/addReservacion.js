 $().ready(function() {

     $.getJSON("https://provincial-web-services.herokuapp.com/cliente").then(function(response){
         var i;
         for (i = 0; i < response.length; ++i) {
             $('#codigo').append('<option value="'+response[i].codigo+'" >'+response[i].nombrecompleto+"  "+response[i].cedula+'</option>');
         }
         $('#codigo').material_select();
     });

     $.getJSON("https://provincial-web-services.herokuapp.com/habitacion").then(function(response){
         var i;
         for (i = 0; i < response.length; ++i) {
             $('#habitaciones').append('<option value="'+response[i].num_habitacion+'" >'+response[i].descripcion+'</option>');
         }
         $('#habitaciones').material_select();
     });


     $.validator.addMethod('cedula',function(value,element){
         return /[0-9]{1}[-][0-9]{4}[-][0-9]{4}/.test(value);
     },'Ingrese una cédula correcta formato: 0-0000-0000')

     $('.datepicker').pickadate({
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15, // Creates a dropdown of 15 years to control year
       format: 'yyyy-mm-dd'
     });

     $("#formValidate").validate({
         rules: {
             cedula: {
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
