 $().ready(function() {
     $('.modal').modal({
         dismissible: false, // Modal can be dismissed by clicking outside of the modal
         opacity: .5, // Opacity of modal background

         complete: function() { updateLista();; } // Callback for Modal close
     }).css({
       width: '90%',
       'margin-left':'5%',
       height:'850px'
   });
     updateLista();
 });

function updateLista(){
    $('#habitaciones').children('li:not(:first)').remove();
    $.getJSON("https://provincial-web-services.herokuapp.com/habitacion").then(function(response){
        var i;
        for (i = 0; i < response.length; ++i) {
            $('#habitaciones').append('<li class="collection-item"><i class="material-icons">store</i><h6 id="'+response[i].num_habitacion+'" onClick="funcShow(this.id)">'+response[i].num_habitacion+'<a class="secondary-content waves-effect waves-light btn" id="'+response[i].num_habitacion+'" onClick="funcDelete(this.id)">  <i class="Tiny material-icons">delete</i>  </a><a class="secondary-content waves-effect waves-light btn" id="'+response[i].num_habitacion+'"onClick="funcUpdate(this.id)"> <i class="Tiny material-icons">mode_edit</i> </a><div class="secondary-content "> Descrión: '+response[i].descripcion+' Hotel: '+response[i].cedula_j+' </div> </h6>  </li>');
        }
    });

};
function reloadModal(){
    var iframe = document.getElementById("FrameId");
    iframe.src = iframe.src;
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
