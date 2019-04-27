$(function() {
$( "#accordion" ).accordion();
});

function inicio() {
/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
//		alert("entradas: "+this.responseText);        
    }
};
xmlhttp.open("GET", "http://localhost:3000", true);
xmlhttp.send();
*/
		form2=document.getElementById("form2");
		form2.innerHTML += "<img src='http://localhost:3000/10.jpg'>";

}

window.addEventListener('load', inicio, false);