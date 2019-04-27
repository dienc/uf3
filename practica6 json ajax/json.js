$(function() {
$( "#accordion" ).accordion();
});

function myFunction (entradas) {

/* var entradas = this.responseText;
   var entradas = JSON.parse(this.responseText);*/
	alert("entradas "+entradas);
	form2=document.getElementById("form2");
	for(i=0;i<entradas.length; i++){
		//alert("entradas "+entradas.length);
		switch(entradas[i].caja) {
  			case "text":
    			form2.innerHTML+="<br/><label class='label'>" + entradas[i].text + "<input type='text' id='"+entradas[i].id+"box' class='input'></input></label><input type='text' id='Val_"+entradas[i].id+"' value='' disabled='disabled'></input>";
    			break;
  			case "password":
    			form2.innerHTML+="<br/><label class='label'>" + entradas[i].text + "<input type='password' id='"+entradas[i].id+"box' class='input' size='8'></input></label><input type='text' id='Val_"+entradas[i].id+"' value='' disabled='disabled'></input>";						
    			break;
  			case "select":
  				var valores = entradas[i].valors.split("+");
				texto_select="<br/><label class='label'>"+entradas[i].text+"<select id='"+entradas[i].id+"box'>";
  				for(j=0;j<valores.length;j++){
  					texto_select+="<option value='"+valores[j]+"'>"+valores[j]+"</option>";
  				}
				texto_select+="</select></label>";
				//alert(";"+texto_select);
				form2.innerHTML+=texto_select;
    			break;
		}
	}
	form2.innerHTML+="<br/><input type='button' id='button3' value='ENVIA'></input></input>";

}


function inicio() {
/*var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "dades.json");
oReq.send();*/
var xmlhttp = new XMLHttpRequest();
var url = "dades.json";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
			alert("entradas: "+this.responseText);        
        var myArr = JSON.parse(this.responseText);
        
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

}

window.addEventListener('load', inicio, false);