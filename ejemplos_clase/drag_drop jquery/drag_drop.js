$(document).ready(function() {inicio()});
comprobante=0;
function inicio() {
for(i=1;i<10;i++){
	nindice="imagen"+i;
	$("#"+nindice).on('dragstart', function(param) {arrastrar(param)});
}

$("#soltar1").on('dragenter',function(param) {cancelar(param)});
$("#soltar1").on('dragover',function(param) {cancelar(param)});
$("#soltar1").on('drop',function(param) {
	alert(param);	
	soltar1(param)});

$("#soltar2").on('dragenter',function(param) {cancelar(param)});
$("#soltar2").on('dragover',function(param) {cancelar(param)});
$("#soltar2").on('drop',function(param) {soltar2(param)});

$("#soltar3").on('dragenter',function(param) {cancelar(param)});
$("#soltar3").on('dragover',function(param) {cancelar(param)});
$("#soltar3").on('drop',function(param) {soltar3(param)});

$("#soltar4").on('dragenter',function(param) {cancelar(param)});
$("#soltar4").on('dragover',function(param) {cancelar(param)});
$("#soltar4").on('drop',function(param) {soltar4(param)});

$("#soltar5").on('dragenter',function(param) {cancelar(param)});
$("#soltar5").on('dragover',function(param) {cancelar(param)});
$("#soltar5").on('drop',function(param) {soltar5(param)});

$("#soltar6").on('dragenter',function(param) {cancelar(param)});
$("#soltar6").on('dragover',function(param) {cancelar(param)});
$("#soltar6").on('drop',function(param) {soltar6(param)});

$("#soltar7").on('dragenter',function(param) {cancelar(param)});
$("#soltar7").on('dragover',function(param) {cancelar(param)});
$("#soltar7").on('drop',function(param) {soltar7(param)});

$("#soltar8").on('dragenter',function(param) {cancelar(param)});
$("#soltar8").on('dragover',function(param) {cancelar(param)});
$("#soltar8").on('drop',function(param) {soltar8(param)});

$("#soltar9").on('dragenter',function(param) {cancelar(param)});
$("#soltar9").on('dragover',function(param) {cancelar(param)});
$("#soltar9").on('drop',function(param) {soltar9(param)});

}

function cancelar(parametro) {
	parametro.preventDefault();
}

function arrastrar(parametro) {
//	alert("param arrastrar "+parametro);
elemento = parametro.target;
codigo=elemento.getAttribute('value');
//alert(codigo);
parametro.originalEvent.dataTransfer.setData("text", codigo);
//parametro.originalEvent.dataTransfer.setData('text', '1');
//	var valor=parametro.originalEvent.dataTransfer.getData("text");
//	alert("arrastrar valor "+valor);
//parametro.dataTransfer.setData('Text',codigo);
//parametro.dataTransfer.setDragImage(parametro.target,0,0);
}

function soltar1(param) {
	
	param.preventDefault();
//	param.stopPropagation();
//	alert("id "+param.getAttribute('id'));
	var valor=param.originalEvent.dataTransfer.getData("text");
//	var valor=param.dataTransfer.getData("text");
//    var valor = param.dataTransfer.getData('application/json');
	alert("valor "+valor);
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	if (!isNaN(valor))	
		soltar1.innerHTML=codigo;
	if (valor==1) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}
function soltar2(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	if (!isNaN(valor))
		soltar2.innerHTML=codigo;
	if (valor==2) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}
function soltar3(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	if (!isNaN(valor)) {	
		soltar3.innerHTML=codigo;
	}
	if (valor==3) { 
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}
function soltar4(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	if (!isNaN(valor))	
		soltar4.innerHTML=codigo;
	if (valor==4) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}
function soltar5(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	soltar5.innerHTML=codigo;
	if (valor==5) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}
function soltar6(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	soltar6.innerHTML=codigo;
	if (valor==6) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}
function soltar7(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	soltar7.innerHTML=codigo;
	if (valor==7) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}
function soltar8(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	soltar8.innerHTML=codigo;
	if (valor==8) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}
function soltar9(param) {
	param.preventDefault();
	var valor=param.dataTransfer.getData('Text');
	codigo="<img src='images/girl_0"+valor+".png' value='"+valor+"' id='imagen"+valor+"'>";
	soltar9.innerHTML=codigo;
	if (valor==9) {
		comprobante++;
		alert("comprobante "+comprobante);
		if (comprobante==9) {
			alert("FELICIDADES");
			soltar=document.getElementById("cajasoltar");
			soltar.style.display="none";
		}
	}
}


window.addEventListener("load",inicio,false);