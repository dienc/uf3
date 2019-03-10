 $(function() {
$( "#accordion" ).accordion();
});

diapo=1;
var num_imagenes;
function inicio() {
	boton_adelante=document.getElementById("fletxa_dreta");
	boton_adelante.addEventListener("click",avanzar,false);

	boton_atras=document.getElementById("fletxa_esquerra");
	boton_atras.addEventListener("click",retroceder,false);

	contenedor=document.getElementById("diapositivas");
	num_imagenes=contenedor.getElementsByTagName("img").length;
//	alert(num_imagenes);
	}
function avanzar() {
//	alert("avanzar");	
	nombre_diapo="diapo"+diapo;
	diapositiva1=document.getElementById(nombre_diapo);
	diapositiva1.style.display="none";
	//actualizo a la nueva diapositiva
	
	if (diapo==num_imagenes)
		diapo=1;
	else
		diapo++;
		
	nombre_diapo="diapo"+diapo;
	//alert(nombre_diapo);
	//que aparezca la nueva diapositiva
	diapositiva2=document.getElementById(nombre_diapo);
	diapositiva2.style.display="block";
}
function retroceder() {
//	alert("retroceder");
	nombre_diapo="diapo"+diapo;
	diapositiva1=document.getElementById(nombre_diapo);
	diapositiva1.style.display="none";
	//actualizo a la nueva diapositiva
	
	if (diapo==1)
		diapo=num_imagenes;
	else
		diapo--;
		
	nombre_diapo="diapo"+diapo;
	//alert(nombre_diapo);
	//que aparezca la nueva diapositiva
	diapositiva2=document.getElementById(nombre_diapo);
	diapositiva2.style.display="block";
}
window.addEventListener("load",inicio, false);