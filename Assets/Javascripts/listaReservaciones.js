 $().ready(function() {
     updateLista();
 });

function updateLista(){
    $('#reservasiones').children('li:not(:first)').remove();
    $.getJSON("https://provincial-web-services.herokuapp.com/reserva").then(function(response){
        var i;
        for (i = 0; i < response.length; ++i) {
            $('#reservasiones').append('<li class="collection-item"><i class="material-icons">subtitles</i><h6 id="'+response[i].num_reservacion+'" onClick="funcShow(this.id)">'+response[i].num_reservacion+'<a class="secondary-content waves-effect waves-light btn" id="'+response[i].num_reservacion+'" onClick="funcDelete(this.id)">  <i class="Tiny material-icons">delete</i>  </a><a class="secondary-content waves-effect waves-light btn" id="'+response[i].num_reservacion+'"onClick="funcUpdate(this.id)"> <i class="Tiny material-icons">mode_edit</i> </a><div class="secondary-content "> Comentarios: '+response[i].comentarios+' Cliente: '+response[i].cedula+' </div> </h6>  </li>');
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
