 $().ready(function() {
     /*
     $.getJSON("https://provincial-web-services.herokuapp.com/hotel").then(function(response){
         var i;
         for (i = 0; i < response.length; ++i) {
             $('#cedula_j').append('<option value="'+response[i].cedula_j+'" >'+response[i].nombre+'</option>');
         }
         $('#cedula_j').material_select();
     });
     $("#cedula_j").change(function() {
         $( "#cedula_j option:selected" ).each(function() {
               var idHotel =$(this).val();
               $('#cedula_j').prop('value', idHotel);
         });
     });*/
     $("#checkbox").change(function() {
         $('#categoria').prop('value', "0");
         if(this.checked) {
             $('#categoria').prop('value', "1");
         }
     });
     $.validator.addMethod('strongPassword',function(value,element){
         return this.optional(element)
        || value.length >= 6
        && /\d/.test(value)
        && /[a-z]/i.test(value);

    },'Ingrese una contraseña que incluya mínimo 6 carácteres, y al un menos número \'.')

     $.validator.addMethod('cedula',function(value,element){
         return /[0-9]{1}[-][0-9]{4}[-][0-9]{4}/.test(value);
     },'Ingrese una cédula correcta formato: 0-0000-0000')

     $.validator.addMethod('tel',function(value,element){
         return /[0-9]{4}[-][0-9]{4}/.test(value);
     },'Ingrese un teléfono correcto formato: 0000-0000')
     $.validator.addMethod('salary',function(value,element){
         return /[0-9][.][0-9]{2}/.test(value);
     },'Ingrese un teléfono correcto formato: 000.00')

     $("#formValidate").validate({
         rules: {
             puesto: {
                 required: true,
                 minlength: 2
             },
             nombre: {
                 required: true,
                 minlength: 3
             },
             apellido1: {
                 required: true,
                 minlength: 3
             },
             apellido2: {
                 required: true,
                 minlength: 3
             },
             cedula: {
                 required: true,
                 nowhitespace: true,
                 cedula: true,
                 maxlength: 11
             },
             salario: {
                 required: true,
                 nowhitespace: true,
                 salary : true
             },
             gender:"required",
             userName: {
                 required: true,
                 minlength: 5,
                 nowhitespace: true
             },
             password: {
 				required: true,
 				strongPassword: true
 			},
 			cpassword: {
 				required: true,
 				equalTo: "#password"
 			},
             correo: {
                 required: true,
                 email:true
             },
             telefono: {
 				required: true,
 				minlength: 9,
                 maxlength: 9,
                 nowhitespace: true,
                 tel: true
             },

         },
         //For custom messages
         messages: {
             puesto:{
                 required: "Ingrese un puesto",
                 minlength: "Ingrese mínimo 2 carácteres"
             },
             nombre:{
                 required: "Ingrese su nombre",
                 minlength: "Ingrese mínimo 3 carácteres"
             },
             apellido1:{
                 required: "Ingrese su primer apellido",
                 minlength: "Ingrese mínimo 3 carácteres"
             },
             apellido2:{
                 required: "Ingrese su segundo apellido",
                 minlength: "Ingrese mínimo 3 carácteres"
             },
             cedula:{
                 required: "Ingrese su identificación",
                 maxlength: "Ingrese formato: 0-0000-0000",
                 nowhitespace: "Por favor remueva los espacios en blanco"
             },
             salario:{
                 required: "Ingrese un salario",
                 nowhitespace: "Por favor remueva los espacios en blanco"
             },
             userName:{
                 required: "Ingrese un nombre de usuario",
                 minlength: "Ingrese mínimo 5 carácteres",
                 nowhitespace: "Por favor remueva los espacios en blanco"
             },
             password:{
                 required: "Ingrese una contraseña"
             },
             cpassword:{
                 required: "Las contraseñas no coinciden",
                 equalTo: "Las contraseñas no coinciden"
             },
             correo:{
                 required: "Ingrese su email",
                 email:"Ingrese un email válido"
             },
             telefono:{
                 required: "Ingrese un número telefónico",
                 minlength: "Ingrese formato: 0000-0000",
                 maxlength: "Ingrese formato: 0000-0000",
                 nowhitespace: "Por favor remueva los espacios en blanco"
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
