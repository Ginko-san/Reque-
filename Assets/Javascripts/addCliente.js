$().ready(function() {
    $('#info').prop('value', "1");
    $.getJSON("https://provincial-web-services.herokuapp.com/empresa").then(function(response){
        var i;
        for (i = 0; i < response.length; ++i) {
            $('select').append('<option value="'+response[i].nombre+'" >'+response[i].nombre+'</option>');
        }
        $('select').material_select();
    });
    $("select").change(function() {
        $( "select option:selected" ).each(function() {
              var nombreEMpresa =$(this).val();
              $('select').prop('value', nombreEMpresa);
        });
    });

    $("#checkbox").change(function() {
        $('#info').prop('value', "0");
        if(this.checked) {
            $('#info').prop('value', "1");
        }
    });

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
            gender:"required",
            useru: {
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
            address: {
				required: true,
				minlength: 15
            },

        },
        //For custom messages
        messages: {
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
            useru:{
                required: "Ingrese un nombre de usuario",
                minlength: "Ingrese mínimo 5 carácteres",
                nowhitespace: "Por favor remueva los espacios en blanco"
            },
            pass:{
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
