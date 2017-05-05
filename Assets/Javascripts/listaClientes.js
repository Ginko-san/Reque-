var miAplicacion = angular.module('clientes', [])

miAplicacion.controller('controlador1',['$scope', function($scope){
    $scope.listClientes=[
            {nombre: "Acevedo Manríquez María Mireya" , cedula: "207550396", telefono: "70345874"},
            {nombre: "Acevedo Mejía Enrique" , cedula: "207550396", telefono: "70345874"},
            {nombre: "Acevedo Ruiz Carolina" , cedula: "207550396", telefono: "70345874"},
            {nombre: "Alejo Guerrero Víctor Hugo" , cedula: "207550396", telefono: "70345874"},
            {nombre: "Angulo Garfias Raúl" , cedula: "207550396", telefono: "70345874"},
            {nombre: "Buenfil Díaz Iván" , cedula: "207550396", telefono: "70345874"},
            {nombre: "Carrizal González Fidel" , cedula: "207550396", telefono: "70345874"},
            {nombre: "Chacón Murillo María del Rocío" , cedula: "207550396", telefono: "70345874"},
            {nombre: "Domínguez Velasco Miguel Ángel" , cedula: "207550396", telefono: "70345874"}
    ];
    }]
);
