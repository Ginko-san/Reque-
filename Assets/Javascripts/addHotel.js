 $().ready(function() {
     var idProvincia = 1;
    $('#selectCantones').prop('disabled', true);
    $('#iddistrito').prop('disabled', true);
    $.getJSON("https://provincial-web-services.herokuapp.com/get_provincias").then(function(response){
        var i;
        for (i = 0; i < response.length; ++i) {
            $('#selectProvincias').append('<option value="'+response[i].idprovincia+'" >'+response[i].nombreprovincia+'</option>');
        }
        $('#selectProvincias').material_select();
    });

    $("#selectProvincias").change(function() {
        $( "#selectProvincias option:selected" ).each(function() {
              idProvincia =$(this).val();
              $('#selectCantones').prop('disabled', false);
              $('#selectCantones').children('option:not(:first)').remove();
              $.getJSON("https://provincial-web-services.herokuapp.com/get_cantones?provinciaID="+idProvincia).then(function(response){
                  var i;
                  for (i = 0; i < response.length; ++i) {
                      $('#selectCantones').append('<option value="'+response[i].idcanton+'" >'+response[i].nombrecanton+'</option>');
                  }
                  $('#selectCantones').material_select();
              });
        });
        $('#iddistrito').prop('disabled', true);
        $('#iddistrito').children('option:not(:first)').remove();
    });

    $("#selectCantones").change(function() {
        $( "#selectCantones option:selected" ).each(function() {
              var idCanton =$(this).val();
              $('#iddistrito').prop('disabled', false);
              $('#iddistrito').children('option:not(:first)').remove();
              $.getJSON("https://provincial-web-services.herokuapp.com/get_distritos?provinciaID="+idProvincia+"&cantonID="+idCanton).then(function(response){
                  var i;
                  for (i = 0; i < response.length; ++i) {
                      $('#iddistrito').append('<option value="'+response[i].codconjunt+'" >'+response[i].nombredistrito+'</option>');
                  }
                  $('#iddistrito').material_select();
              });
        });
    });
    $("#iddistrito").change(function() {
        $( "#iddistrito option:selected" ).each(function() {
              var idCanton =$(this).val();
              $('#iddistrito').prop('value', idCanton);
        });
    });

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
             phone: {
 				required: true,
 				minlength: 9,
                 maxlength: 9,
                 nowhitespace: true,
                 tel: true
             },
             razon_social: {
 				required: true
            },
            direccionexacta: {
				required: true,
				minlength: 15
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
             phone:{
                 required: "Ingrese un número telefónico",
                 minlength: "Ingrese formato: 0000-0000",
                 maxlength: "Ingrese formato: 0000-0000",
                 nowhitespace: "Por favor remueva los espacios en blanco"
             },
             razon_social:{
                 required: "Ingrese una descripción "
             },
             direccionexacta:{
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
