var numHabitaciones = [];
 $().ready(function() {
     $.getJSON("https://provincial-web-services.herokuapp.com/cliente").then(function(response){
         var i;
         for (i = 0; i < response.length; ++i) {
             $('#codigo').append('<option value="'+response[i].codigo+'" >'+response[i].nombrecompleto+"  "+response[i].cedula+'</option>');
         }
         $('#codigo').material_select();
     });

     $('#codigo').change(function() {
         $( "#codigo option:selected" ).each(function() {
               $("#codigo").prop('value', $(this).val());
         });
     });


     $.getJSON("https://provincial-web-services.herokuapp.com/habitacion").then(function(response){
         var i;
         for (i = 0; i < response.length; ++i) {
             $('#habitaciones1').append('<option value="'+response[i].num_habitacion+'" >'+response[i].descripcion+'</option>');
         }
         $('#habitaciones1').material_select();
     });

     $("#fecha_salida").change(function() {
         if ($("#fecha_entrada").val() !== "") {
             habitacionesDisponibles();
        };
     });
     $("#fecha_entrada").change(function() {
        if ($("#fecha_salida").val() !== "") {
            habitacionesDisponibles();
        };
     });

     $("#habitaciones1").change(function() {

        habitacionesDisponibles();
     });

     function habitacionesDisponibles(){
             var i =1;
             $("#habitaciones1").each(function() {
                 var habitacion = $("#habitaciones1 option:eq("+i+")").val();
                   $.post("https://provincial-web-services.herokuapp.com/verificar_habitacion?habitacion="+habitacion+"&fecha_I="+$("#fecha_entrada").val()+"&fecha_F="+$("#fecha_salida").val()+"&_method=TwoDate" )
                   .then(function(response){
                       if (response[0].verificarroomdates === "t") {
                           /*console.log("desabilidatos");
                           $("#habitaciones1 option:eq("+i+")").prop('disabled', true);
                           console.log($("#habitaciones1 option:eq("+i+")").val());
                           $("#habitaciones1 option:eq("+i+")").prop('selected', false);
                           console.log($("#habitaciones1 option:eq("+i+")"));*/
                       }
                   });
                   ++i;
             });
             getHabitaciones();
     };

     $.validator.addMethod('cedula',function(value,element){
         return /[0-9]{1}[-][0-9]{4}[-][0-9]{4}/.test(value);
     },'Ingrese una cédula correcta formato: 0-0000-0000')

     $.validator.addMethod('valiDate',function(value,element){
         var startDate = $('#fecha_entrada').val();
         var finDate = $('#fecha_salida').val();
         return Date.parse(startDate) < Date.parse(finDate);
     },'Ingrese un rango de fecha válido')

     $('.datepicker').pickadate({
       format: 'yyyy-mm-dd',
       min: new Date(moment().format())
     });

     $("#formValidate").validate({
         rules: {
             cedula: {
                 required: true,
                 nowhitespace: true,
                 cedula: true,
                 maxlength: 11
             },
             fecha_entrada: {
                 required: true
             },
             fecha_salida: {
                 valiDate: true,
                 required: true
             },
             comentario: {
 				required: true
            },

         },
         //For custom messages
         messages: {
             cedula:{
                 required: "Ingrese su identificación",
                 maxlength: "Ingrese formato: 0-0000-0000",
                 nowhitespace: "Por favor remueva los espacios en blanco"
             },
             fecha_entrada:{
                 required: "Ingrese una fecha de inicio"
             },
             fecha_salida:{
                 required: "Ingrese una fecha de fin"
             },
             comentario:{
                 required: "Ingrese un comentario"
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

 function getHabitaciones(){
     numHabitaciones =  $("#habitaciones1").val();
     var i = 0;
     $(numHabitaciones).each(function() {
          numHabitaciones[i] = parseInt( numHabitaciones[i] );
          ++i;
     });
     console.log(numHabitaciones);
     $("#habitaciones").prop('value',"["+numHabitaciones+"]");

 };
