$(function() {
$( "#accordion" ).accordion();
});

function inicio() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
//		alert("entradas: "+this.responseText);        
		form2=document.getElementById("form2");
		form2.innerHTML += this.responseText;
    }
};
xmlhttp.open("GET", "http://localhost:3000", true);
xmlhttp.send();

}

window.addEventListener('load', inicio, false);