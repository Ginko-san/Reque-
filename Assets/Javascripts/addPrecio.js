 $().ready(function() {
     $('select').material_select();

     $('.datepicker').pickadate({
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15 // Creates a dropdown of 15 years to control year
     });

     $("#formValidate").validate({
         rules: {
             amount: {
                 required: true
             },
             initialDate: {
                 required: true
             },
             endedDate: {
                 required: true
             },

         },
         //For custom messages
         messages: {
             amount:{
                 required: "Ingrese el monto"
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
