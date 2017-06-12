 $().ready(function() {

     $.getJSON("https://provincial-web-services.herokuapp.com/cliente").then(function(response){
         var i;
         for (i = 0; i < response.length; ++i) {
             console.log(response[i]);
             $('#clientes').append('<li class="collection-item "> <i class="material-icons">perm_identity</i><h6>'response[i].nombrecompleto'<a class="secondary-content waves-effect waves-light btn"> <i class="Tiny material-icons">delete</i> </a> <a class="secondary-content waves-effect waves-light btn"><i class="Tiny material-icons">mode_edit</i>  </a> <div class="secondary-content "> Cédula: 'response[i].cedula' Teléfono: 'response[i].telefonoe'</div> </h6><hr></li>');
         }
     });
 });
