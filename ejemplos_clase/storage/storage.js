function iniciar(){
var boton=document.getElementById('grabar');
boton.addEventListener('click', nuevoitem, false);
var name;
if (document.getElementById("delete")){
	var delete=document.getElementById('delete');
	window.addEventListener('click', eliminar, false);
	}
}
function nuevoitem(){
var clave=document.getElementById('clave').value;
var valor=document.getElementById('texto').value;
sessionStorage.setItem(clave,valor);
mostrar(clave);
}
function mostrar(){
var cajadatos=document.getElementById('cajadatos');
cajadatos.innerHTML='<div><button
onclick="eliminarTodo()">Eliminar Todo</button></div>';
for(var f=0;f<sessionStorage.length;f++){
var clave=sessionStorage.key(f);
var valor=sessionStorage.getItem(clave);
cajadatos.innerHTML+='<div>'+clave+' - '+valor+'<br><button
onclick="eliminar(\''+clave+'\')">Eliminar</button></div>';
}
}
function eliminar(clave){
if(confirm('Est� Seguro?')){
sessionStorage.removeItem(clave);
mostrar();
}
}
function eliminarTodo(){
if(confirm('Est� Seguro?')){
sessionStorage.clear();
mostrar();
}
}
window.addEventListener('load', iniciar, false);