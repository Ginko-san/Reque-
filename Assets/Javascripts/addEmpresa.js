$().ready(function() {
    $('select').material_select();

    $.validator.addMethod('cedula',function(value,element){
        return /[0-9]{1}[-][0-9]{3}[-][0-9]{6}/.test(value);
    },'Ingrese una cédula correcta formato: 0-000-000000')

    $.validator.addMethod('tel',function(value,element){
        return /[0-9]{4}[-][0-9]{4}/.test(value);
    },'Ingrese un teléfono correcto formato: 0000-0000')

    $("#formValidate").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 2
            },
            cedula_j: {
                required: true,
                nowhitespace: true,
                cedula: true,
                maxlength: 12
            },
            email: {
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
            nombre:{
                required: "Ingrese su nombre",
                minlength: "Ingrese mínimo 2 carácteres"
            },
            cedula_j:{
                required: "Ingrese una cédula jurídica",
                maxlength: "Ingrese formato: 0-000-000000",
                nowhitespace: "Por favor remueva los espacios en blanco"
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
