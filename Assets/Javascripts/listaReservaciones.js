  var eliminarId = 0;
 $().ready(function() {
     $('#modal1').modal({
         dismissible: false, // Modal can be dismissed by clicking outside of the modal
         opacity: .5, // Opacity of modal background
         endingTop: '1%',
         complete: function() { updateLista(); } // Callback for Modal close
     }).css({
       width: '90%',
       'margin-left':'5%',
       'min-height':' 90%'
   });
   $('#modalDelete').modal();
   $('#md1_YesBtn').click(function(){
       $.post( "https://provincial-web-services.herokuapp.com/reserva", { num_reservacion: eliminarId,_method :"Delete" } ).then(function(){
          updateLista();
       });
       eliminarId = 0;
       $('#modalDelete' ).modal('close');
   });
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
function reloadModal(){
    var iframe = document.getElementById("FrameId");
    iframe.src = iframe.src;
};

 var validar = true;
 function funcDelete(id){
     eliminarId = id;
     $('#modalDelete' ).modal('open');
     validar = false;
 };
 function funcUpdate(id){
     validar = false;
 };
 function funcShow(id){
     if (validar) {

     }
     validar = true;
 };
