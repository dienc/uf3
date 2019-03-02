function dibujar_lineas(){
	var canvas1=document.getElementById("can_1");
	lineas=canvas1.getContext("2d");
	lineas2=canvas1.getContext("2d");
	//lineas horizontales	
	lineas.strokeStyle="black";
	lineas.moveTo(0,30);
	lineas.lineTo(300,30);
	lineas.moveTo(0,60);
	lineas.lineTo(300,60);	
	lineas.moveTo(0,90);
	lineas.lineTo(300,90);	
	lineas.moveTo(0,120);
	lineas.lineTo(300,120);
	//lineas verticales	
	lineas.moveTo(75,0);
	lineas.lineTo(75,150);	
	lineas.moveTo(150,0);
	lineas.lineTo(150,150);	
	lineas.moveTo(225,0);
	lineas.lineTo(225,150);	
	lineas.stroke();
	lineas2.beginPath();
	lineas2.moveTo(300,30);
	lineas2.lineTo(300,60);	
	lineas2.lineWidth='4';
	lineas2.strokeStyle="red";
	lineas2.stroke();
	}
function seleccion(){
var opciones=document.getElementsByName("opciones");
for(var i=0; i<opciones.length; i++) {
//  alert(" Elemento: " + opciones[i].value + "\n Seleccionado: " + opciones[i].checked);
  if (opciones[i].checked){
  	return(opciones[i].value);
  	}
}
	
	}