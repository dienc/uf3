comprobante=[0,0,0,0,0,0,0,0,0,0];
function inicio() {
//añadimos la opcion de drag a todas las imagenes
for(i=1;i<10;i++){
	nindice="imagen"+i;
	//alert(nindice);
	imagen=document.getElementById(nindice);
	imagen.addEventListener("dragstart",arrastrar,false);
}

//añadimos la opcion de drop
zona1=document.getElementById("soltar1");
zona1.addEventListener("dragenter",cancelar,false);
zona1.addEventListener("dragover",cancelar,false);
zona1.addEventListener("drop",soltar1,false);

zona2=document.getElementById("soltar2");
zona2.addEventListener("dragenter",cancelar,false);
zona2.addEventListener("dragover",cancelar,false);
zona2.addEventListener("drop",soltar2,false);

zona3=document.getElementById("soltar3");
zona3.addEventListener("dragenter",cancelar,false);
zona3.addEventListener("dragover",cancelar,false);
zona3.addEventListener("drop",soltar3,false);

zona4=document.getElementById("soltar4");
zona4.addEventListener("dragenter",cancelar,false);
zona4.addEventListener("dragover",cancelar,false);
zona4.addEventListener("drop", soltar4,false);

zona5=document.getElementById("soltar5");
zona5.addEventListener("dragenter",cancelar,false);
zona5.addEventListener("dragover",cancelar,false);
zona5.addEventListener("drop",soltar5,false);

zona6=document.getElementById("soltar6");
zona6.addEventListener("dragenter",cancelar,false);
zona6.addEventListener("dragover",cancelar,false);
zona6.addEventListener("drop",soltar6,false);

zona7=document.getElementById("soltar7");
zona7.addEventListener("dragenter",cancelar,false);
zona7.addEventListener("dragover",cancelar,false);
zona7.addEventListener("drop",soltar7,false);

zona8=document.getElementById("soltar8");
zona8.addEventListener("dragenter",cancelar,false);
zona8.addEventListener("dragover",cancelar,false);
zona8.addEventListener("drop",soltar8,false);

zona9=document.getElementById("soltar9");
zona9.addEventListener("dragenter",cancelar,false);
zona9.addEventListener("dragover",cancelar,false);
zona9.addEventListener("drop",soltar9,false);
}

function cancelar(parametro) {
	parametro.preventDefault();
}

function arrastrar(parametro) {
elemento = parametro.target;
codigo=elemento.getAttribute('value');
alert(codigo);
parametro.dataTransfer.setData('Text',codigo);
//parametro.dataTransfer.setDragImage(parametro.target,0,0);
}
function comprobar(valor) {
		comprobante[valor]=1;
		sumatori=0;
		alert("comprobante "+comprobante);
		for(i=1;i<10;i++){
			sumatori=sumatori+comprobante[i];		
			}
		if (sumatori==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	
	}
function soltar1(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"' draggable='false'>";
	if (!isNaN(valor)) {
		imagen=document.getElementById('imagen'+valor);
		padre = imagen.parentNode;
		padre.removeChild(imagen);
		zona1.innerHTML=codigo;
		nueva_imagen=document.getElementById('imagen'+valor);
		nueva_imagen.addEventListener("dragstart",arrastrar,false);
	}

	if ((valor==1) & (comprobante[valor-1]==0)) {
		comprobar(valor);
	}
}
function soltar2(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	if (!isNaN(valor)) {
		imagen=document.getElementById('imagen'+valor);
		padre = imagen.parentNode;
		padre.removeChild(imagen);
		zona2.innerHTML=codigo;
		nueva_imagen=document.getElementById('imagen'+valor);
		nueva_imagen.addEventListener("dragstart",arrastrar,false);
	}
	if (valor==2) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	}
}
function soltar3(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	if (!isNaN(valor)) {	
		zona3.innerHTML=codigo;
	}
	if (valor==3) { 
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	}
}
function soltar4(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	if (!isNaN(valor))	
		zona4.innerHTML=codigo;
	if (valor==4) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	}
}
function soltar5(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	zona5.innerHTML=codigo;
	if (valor==5) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	}
}
function soltar6(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	zona6.innerHTML=codigo;
	if (valor==6) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	}
}
function soltar7(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	zona7.innerHTML=codigo;
	if (valor==7) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	}
}
function soltar8(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	zona8.innerHTML=codigo;
	if (valor==8) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	}
}
function soltar9(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	zona9.innerHTML=codigo;
	if (valor==9) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			zona=document.getElementById("cajasoltar");
			zona.style.display="none";
		}
	}
}

window.addEventListener("load",inicio,false);