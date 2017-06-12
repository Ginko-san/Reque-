 $().ready(function() {

     $.getJSON("https://provincial-web-services.herokuapp.com/hotel").then(function(response){
         var i;
         for (i = 0; i < response.length; ++i) {
             $('select').append('<option value="'+response[i].cedula_j+'" >'+response[i].nombre+'</option>');
         }
         $('select').material_select();
     });
     $("select").change(function() {
         $( "select option:selected" ).each(function() {
               var idHotel =$(this).val();
               $('select').prop('value', idHotel);
         });
     });




     $("#formValidate").validate({
         rules: {
             numero: {
                required: true
             },
             description: {
 				required: true
            },
            cedula_j: {
                required: true
           }
         },
         //For custom messages
         messages: {

            numero:{
                 required: "Ingrese el número de la habitación"
            },
             description:{
                 required: "Ingrese una descripción "
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
