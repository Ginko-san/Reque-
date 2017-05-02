var miAplicacion = angular.module('admin', [])

miAplicacion.controller('controlador1',['$scope', function($scope){
    $scope.habitaciones=[
            {numero: "1" , descripcion: "Ocupada"},
            {numero: "2" , descripcion: "Desocupada"},
            {numero: "3" , descripcion: "Desocupada"},
            {numero: "4" , descripcion: "Ocupada"},
            {numero: "5" , descripcion: "Ocupada"},
            {numero: "6" , descripcion: "Desocupada"},
            {numero: "7" , descripcion: "Ocupada"},
            {numero: "8" , descripcion: "Desocupada"},
            {numero: "9" , descripcion: "Ocupada"},
    ];
}])
