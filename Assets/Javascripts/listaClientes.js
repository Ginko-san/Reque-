 $().ready(function() {
     updateLista();
 });

function updateLista(){
    $.getJSON("https://provincial-web-services.herokuapp.com/cliente").then(function(response){
        var i;
        for (i = 0; i < response.length; ++i) {
            $('#clientes').append('<li class="collection-item"><i class="material-icons">perm_identity</i><h6 id="'+response[i].cedula+'" onClick="funcShow(this.id)">'+response[i].nombrecompleto+'<a class="secondary-content waves-effect waves-light btn" id="'+response[i].cedula+'" onClick="funcDelete(this.id)">  <i class="Tiny material-icons">delete</i>  </a><a class="secondary-content waves-effect waves-light btn" id="'+response[i].cedula+'"onClick="funcUpdate(this.id)"> <i class="Tiny material-icons">mode_edit</i> </a><div class="secondary-content "> Cédula: '+response[i].cedula+' Teléfono: '+response[i].telefonoe+' </div> </h6>  <hr></li>');
        }
    });

};


 var validar = true;
 function funcDelete(id){
     console.log(id+ " "+"delete");
     validar = false;
     updateLista();
 };
 function funcUpdate(id){
     console.log(id+ " "+"update");
     validar = false;
     updateLista();
 };
 function funcShow(id){
     if (validar) {
         console.log(id + " "+"show");
     }
     validar = true;
 };
