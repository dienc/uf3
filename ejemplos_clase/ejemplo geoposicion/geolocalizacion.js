function iniciar(){
var boton=document.getElementById('obtener');
boton.addEventListener('click', obtener, false);
}
function obtener(){
var geoconfig={
enableHighAccuracy: true,
timeout: 10000,
maximumAge: 60000
};
//navigator.geolocation.getCurrentPosition(mostrar, errores,geoconfig);
control=navigator.geolocation.watchPosition(mostrar, errores,geoconfig);

}
function mostrar(posicio){
var ubicacion=document.getElementById('ubicacion');
var dato=document.getElementById('datos');
var datos='';
datos+='Latitud: '+posicio.coords.latitude+'<br>';
datos+='Longitud: '+posicio.coords.longitude+'<br>';
datos+='Exactitud: '+posicio.coords.accuracy+'mts.<br>';
dato.innerHTML=datos;
var mapurl='http://maps.google.com/maps/api/staticmap?center='+posicio.coords.latitude+','+posicio.coords.longitude+'&zoom=12&size=400x400&sensor=false&markers='+posicion.coords.latitude+','+posicio.coords.longitude;
ubicacion.innerHTML='<img src="'+mapurl+'">';

}
function errores(error){
alert('Error: '+error.code+' '+error.message);
}
window.addEventListener('load', iniciar, false);