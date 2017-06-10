$().ready(function() {
    $.validator.addMethod('strongPassword',function(value,element){
        return this.optional(element)
       || value.length >= 6
       && /\d/.test(value)
       && /[a-z]/i.test(value);

   },'Ingrese una contraseña que incluya mínimo 6 carácteres, y al menos un número \'.')

    $.validator.addMethod('cedula',function(value,element){
        return /[0-9]{1}[-][0-9]{4}[-][0-9]{4}/.test(value);
    },'Ingrese una cédula correcta formato: 0-0000-0000')

    $.validator.addMethod('tel',function(value,element){
        return /[0-9]{4}[-][0-9]{4}/.test(value);
    },'Ingrese un teléfono correcto formato: 0000-0000')

    $("#formValidate").validate({
        rules: {
            uname: {
                required: true,
                minlength: 3
            },
            lastname1: {
                required: true,
                minlength: 3
            },
            lastname2: {
                required: true,
                minlength: 3
            },
            id: {
                required: true,
                nowhitespace: true,
                cedula: true,
                maxlength: 11
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
            email: {
                required: true,
                email:true
            },
            phone: {
				required: true,
				minlength: 9,
                maxlength: 9,
                nowhitespace: true,
                tel: true
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
                minlength: "Ingrese mínimo 3 carácteres"
            },
            lastname1:{
                required: "Ingrese su primer apellido",
                minlength: "Ingrese mínimo 3 carácteres"
            },
            lastname2:{
                required: "Ingrese su segundo apellido",
                minlength: "Ingrese mínimo 3 carácteres"
            },
            id:{
                required: "Ingrese su identificación",
                maxlength: "Ingrese formato: 0-0000-0000",
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
            email:{
                required: "Ingrese su email",
                email:"Ingrese un email válido"
            },
            phone:{
                required: "Ingrese un número telefónico",
                minlength: "Ingrese formato: 0000-0000",
                maxlength: "Ingrese formato: 0000-0000",
                nowhitespace: "Por favor remueva los espacios en blanco"
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
