 $(function() {
$( "#accordion" ).accordion();
});

var selector;
var form1;
var form2;
var form3;
var para;

function inicio() {
	selector=document.getElementById("vehiculo");
	alert("inicio: "+selector.value);
	form1=document.getElementById("formulari1");
	form2=document.getElementById("formulari2");
	form3=document.getElementById("formulari3");
	selector.addEventListener("change", pepe, false);
	para = document.querySelector('p');
}

function pepe() {
	alert("pepe: "+selector.value);
	if (selector.value === 'moto') {
		form1.style.display="none";
		form2.style.display="block";
	} else {
		form1.style.display="none";
		form3.style.display="block";
	}
	para.textContent="se ha elegido "+selector.value;
}

window.addEventListener('load', inicio, false);