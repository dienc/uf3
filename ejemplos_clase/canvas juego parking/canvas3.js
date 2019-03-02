function captura(num_tecla){
	alert("la tecla ha dado el numero: "+num_tecla.keyCode);
	}
document.addEventListener("keypress",captura,false);
