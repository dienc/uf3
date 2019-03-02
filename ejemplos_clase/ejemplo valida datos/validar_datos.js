function inicio() {
	caja4=document.getElementById("caja4");
	caja4.addEventListener("blur",validar_email,false);

}
function validar_email() {
	var er_email = new RegExp("^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");
	caja4=document.getElementById("caja4");
	if (caja4.value=="") {
		val_caja4=document.getElementById("val_caja4");
		val_caja4.value="email vacio";
		val_caja4.style.display="block";
	} else {
		if (!er_email.test(caja4.value)) {
			val_caja4=document.getElementById("val_caja4");
			val_caja4.value="email mal escrito";
			val_caja4.style.display="block";
		} else {
			val_caja4=document.getElementById("val_caja4");
			val_caja4.value="";
			val_caja4.style.display="none";
		}
	}
}
window.addEventListener("load",inicio,false);