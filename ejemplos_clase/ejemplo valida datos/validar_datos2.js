function inicio() {
	caja1=document.getElementById("caja1");
	caja1.addEventListener("blur",validar_nombre,false);
	caja4=document.getElementById("caja4");
	caja4.addEventListener("blur",validar_email,false);

	boton=document.getElementById("boton");
	boton.addEventListener("click",validar_todo,false);
		
}

function validar_email() {
	expr_email = new RegExp("^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");
	caja4=document.getElementById("caja4");
	valor_email=caja4.value;
	
	if (valor_email=="") {
		val_caja4=document.getElementById("val_caja4");
		val_caja4.value="te falta el email";
		val_caja4.style.display="block";
		return false;
	} else {
//		alert(expr_email.test(valor_email));
		if(!expr_email.test(valor_email)) {
			val_caja4=document.getElementById("val_caja4");
			val_caja4.value="el email esta super mal";
			val_caja4.style.display="block";
			return false;
		}	else {
			//esta opcion es para cuando el email esta informado y cumple la expresion regular
			val_caja4=document.getElementById("val_caja4");
			val_caja4.value="";
			val_caja4.style.display="none";
			return true;
		}
	}
}
function validar_nombre() {
	expr_email = new RegExp("(^([0-9]{5,5})|^)$");
	caja1=document.getElementById("caja1");
	valor_nombre=caja1.value;
	
	if (valor_nombre=="") {
		val_caja1=document.getElementById("val_caja1");
		val_caja1.value="te falta el nombre";
		val_caja1.style.display="block";
		return false;
	} else {
//		alert(expr_email.test(valor_email));
		if(!expr_email.test(valor_nombre)) {
			val_caja1=document.getElementById("val_caja1");
			val_caja1.value="el nombre esta super mal";
			val_caja1.style.display="block";
			return false;
		}	else {
			//esta opcion es para cuando el email esta informado y cumple la expresion regular
			val_caja1=document.getElementById("val_caja1");
			val_caja1.value="";
			val_caja1.style.display="none";
			return true;
		}
	}
}

function validar_todo() {
		valida_email=validar_email();
		alert(valida_email);
		valida_nom=validar_nombre();
		alert(valida_nom);
//		if (valida_email && valida_nom){
			//enviamos el formulario al fichero PHP!!!		
//		}
}

window.addEventListener("load",inicio,false);