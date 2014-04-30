// JavaScript Document


window.onload = createGMap();/*cuando se carga la ventana se ejecuta el codigo en createGMap*/

function createGMap()
{
// CREAR Coordenadas del GMap 
var map_latlng = new google.maps.LatLng(19.251374,-99.117858);

// CREAR Opciones del GMap 
var map_options =
{
	zoom: 15, // Valores Numéricos Literales o Variables que determian el nivel de Zoom del Mapa ( 1 - 24 ) 
	center: map_latlng, // USAR la Variable que contienen la latitud y longitud ( Coordenadas ) 
	mapTypeId: google.maps.MapTypeId.ROADMAP, // USAR una Constante predefinida: ROADMAP / SATELLITE / HYBRID / TERRAIN 
	streetViewControl: true // USAR un Valor Booleno: true / false 
};

// CREAR GMap y sus opciones, DENTRO de un DIV del HTML 
var custom_map = new google.maps.Map
(
	document.getElementById("map"), // USAR una Cadena donde se refiera al ID del DIV que contendrá al GMap 
	map_options // USAR la Variable donde se crearon las Opciones del GMap 
);

// CREAR Contenido para un InfoWindow 
var content_data_html =
'<div id="custom_info_window">' +
	'<h1>Luz Silente</h1>' + '<img src="">' +
	'<p>' +
		'<span class="data">Avenida Constitución 600. Col. Barrio la Concha Xochimilco, C.P. 04510. Ciudad de México México</span><br><br>' +
		'<span class="data">Auditorio Fransisco Goitia. </span>' + '<br>' +
		'<span class="data"> ENAP | UNAM</span>' +
	'</p>'
	 +
'</div>';

// CREAR un InfoWindow y asignar su Contenido 
var info_map = new google.maps.InfoWindow
({
	content: content_data_html // Variable que tiene una estructura de HTML para el InfoWindow 
});

// CREAR una Referencia de Imagen que se usará como Marcador en  el GMap 
var image_marker = 'Item05_GMaps/_imgs/logo_mapa.png';

// CREAR el Marcador y sus Opciones para usarlo en el GMap 
var map_marker = new google.maps.Marker
({
	position: map_latlng, // USAR la Variable que contienen la latitud y longitud ( Coordenadas ) 
	map: custom_map, // USAR la Variable donde se ha creado el mapa previamente 
	icon: image_marker, // USAR Variable que tiene la referencia de la imagen a usarse como marcador 
	title: 'Luz Silente' // USAR una Cadena literal de Texto o una Variable  \n = salto de linea js
});

// CREAR la interacción del marcador ( Click ) 
google.maps.event.addListener
(
	map_marker, // USAR Variable donde se creó el Marcador del GMap 
	'click',
	function()
	{
		info_map.open // Usar Variable donde se Creó el InfoWindow 
		(
			custom_map, // USAR Variable donde se Creó el Mapa 
			map_marker // USAR Variable donde se creó el Marcador del GMap 
		);
	}
);
}