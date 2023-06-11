// Obtener los elementos del DOM
var cantidadTicketsinput = document.getElementById('cantidadTickets');
var btnResumen = document.getElementById('btnResumen');
var totalPago = document.getElementById('totalPago');
var categoriaSelectinput = document.getElementById('categoriaSelect');


// Agregar un evento de clic al botón
btnResumen.addEventListener('click', function() {
  // Obtener el valor ingresado en el campo de cantidad de tickets
  var cantidadTickets = parseInt(cantidadTicketsinput.value);
if (cantidadTickets <1){
  cantidadTickets = 0;
}
// Obtener el tipo de ticket seleccionado
var categoriaSelect = parseInt(categoriaSelectinput.value);

// Definir los descuentos para cada tipo de ticket
var descuento = 0;
if (categoriaSelect === 1) {
  descuento = 0.8; // 80% de descuento
} else if (categoriaSelect === 2) {
  descuento = 0.5; // 50% de descuento
} else if (categoriaSelect === 3) {
  descuento = 0.15; // 15% de descuento
} else {
 descuento = 0;
}

  // Calcular el total a pagar 
 var total = cantidadTickets * 200 * (1 - descuento);

  // Mostrar el resultado en el elemento correspondiente
  totalPago.textContent = '' + total.toFixed(2);
});

 


