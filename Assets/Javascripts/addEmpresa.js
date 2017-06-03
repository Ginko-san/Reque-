$().ready(function() {
    $('select').material_select();

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
                minlength: 2
            },
            id: {
                required: true,
                minlength: 9,
                nowhitespace: true,
                maxlength: 9,
                number: true
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
