$().ready(function() {
    $.validator.addMethod('strongPassword',function(value,element){
        return this.optional(element)
        || value.length >= 6
        && /d/.test(value)
        && /[a-z]/i.test(value);

    },'Ingrese una contraseña que incluya mínimo 6 carácteres, y al menos número \'.')

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
                minlength: 9,
                nowhitespace: true,
                maxlength: 9,
                number: true
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
				minlength: 8,
                maxlength: 8,
                nowhitespace: true,
                number: true
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
                minlength: "Ingrese mínimo 9 carácteres",
                maxlength: "Ingrese máximo 9 carácteres",
                number: "Ingrese solo carácteres numéricos",
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
                minlength: "Ingrese mínimo 8 carácteres",
                maxlength: "Ingrese maximo 8 carácteres",
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
