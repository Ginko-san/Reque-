var miAplicacion = angular.module('selectores', []).config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain. **.
    'https://provincial-web-services.herokuapp.com/get_provincias**'
    ]);
})
miAplicacion.controller('ctrlProvincias', function($scope,$http){
    //$scope.provincias = [ "Alois" , "Gardenzio", "Carlos" ];
    $scope.posts = [];
    $http.get("https://provincial-web-services.herokuapp.com/get_provincias").then(function(data){
            console.log(data);
            $scope.posts = data;
        });

    /*$.getJSON("https://provincial-web-services.herokuapp.com/get_provincias", function (data) {
      console.log(data);
      $scope.posts = data;
    });*/

});
miAplicacion.controller('ctrlCantones',['$scope','$http', function($scope,$http){

}]);
miAplicacion.controller('ctrlDistritos',['$scope','$http', function($scope,$http){

}]);


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
