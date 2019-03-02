diapo=1;
var num_imagenes;
function inicio() {
//	alert("hemos entrado en la funcion inicio");
	diapositiva=document.getElementById("diapositiva1");
	diapositiva.style.display="block";
	
	boton_adelante=document.getElementById("botonadelante");
	boton_adelante.addEventListener("click",avanzar,false);

	boton_atras=document.getElementById("botonatras");
	boton_atras.addEventListener("click",retroceder,false);

	contenedor=document.getElementById("diapositivas");
	num_imagenes=contenedor.getElementsByTagName("picture").length;
//	alert(num_imagenes);

//esto es el codigo para los formularios!!!!!
	principal=document.getElementById("principal");
	principal.style.display="block";
	boton_principal=document.getElementById("consultar");
	boton_principal.addEventListener("click",cambiar_formulario,false);
	}
function cambiar_formulario() {
	var variable_local;
	vehiculos=document.getElementsByName("vehiculos");
	alert(vehiculos[1].checked);
	alert(vehiculos[1].value);
	for(i=0;i<vehiculos.length;i++){
		if (vehiculos[i].checked) {
			variable_local=vehiculos[i].value;
		}
	}
	alert(variable_local);
	principal=document.getElementById("principal");
	principal.style.display="none";
	
	formulario_aparecer=document.getElementById(variable_local);
	formulario_aparecer.style.display="block";
}
function avanzar() {
	//alert(diapo);
	nombre_diapo="diapositiva"+diapo;
	diapositiva1=document.getElementById(nombre_diapo);
	diapositiva1.style.display="none";
	//actualizo a la nueva diapositiva
	
	if (diapo==num_imagenes)
		diapo=1;
	else
		diapo++;
		
	nombre_diapo="diapositiva"+diapo;
	//alert(nombre_diapo);
	//que aparezca la nueva diapositiva
	diapositiva2=document.getElementById(nombre_diapo);
	diapositiva2.style.display="block";
}
function retroceder() {
	//alert(diapo);
	nombre_diapo="diapositiva"+diapo;
	diapositiva1=document.getElementById(nombre_diapo);
	diapositiva1.style.display="none";
	//actualizo a la nueva diapositiva
	
	if (diapo==1)
		diapo=num_imagenes;
	else
		diapo--;
		
	nombre_diapo="diapositiva"+diapo;
	//alert(nombre_diapo);
	//que aparezca la nueva diapositiva
	diapositiva2=document.getElementById(nombre_diapo);
	diapositiva2.style.display="block";
}
window.addEventListener("load",inicio, false);