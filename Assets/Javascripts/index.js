$(document).ready(function() {
	//by default
	$("#content").load("listaHabitaciones.html");

	$("#load_habitaciones").on("click", function() {
		$("#content").load("listaHabitaciones.html");
	});

	$("#load_clientes").on("click", function() {
		$("#content").load("listaClientes.html");
	});

	$("#load_empleados").on("click", function() {
		$("#content").load("listaEmpleados.html");
	});

	$("#load_empresas").on("click", function() {
		$("#content").load("listaEmpresas.html");
	});

	$("#load_reservas").on("click", function() {
		$("#content").load("listaReservaciones.html");
	});

	$("#load_hoteles").on("click", function() {
		$("#content").load("listaHoteles.html");
	});
});