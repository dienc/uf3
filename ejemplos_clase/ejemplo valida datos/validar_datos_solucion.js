var elnombre="\d{1,2}/\d{1,2}/\d{4}";
var elnombre = new RegExp("^[A-Z][a-z]");
var elcorreo=/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
var elcontrasena=/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
var eltelefono=/^[0-9]{2,3}-? ?[0-9]{6,7}$/;
var elcodigopostal=/^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
/*
function validacion(caja1, caja2, caja3, caja4, caja5, caja6, caja7)
{
	if(elnombre.test(caja1))
	{
		alert('Nombre mal introducido');
		return false;
	}
	if(elnombre.test(caja2))
	{
		alert('1 apellido mal introducido');
		return false;
	}
	if(elnombre.test(caja3))
	{
		alert('2 apellido mal introducido');
		return false;
	}
	if(caja4!='')
	{
		if(!elcorreo.test(caja4))
		{
			alert('Correo mal introducido');
			return false;
		}
	}
	if(caja5!='')
	{
		if(!elcontrasena.test(caja5))
		{
			alert('Contraseña mal introducida');
			return false;
		}
	}
	if(caja6!='')
	{
		if(!eltelefono.test(caja6))
		{
			alert('telefono mal introducido');
			return false;
		}
	}
	if(caja7!='')
	{
		if(!elcodigopostal.test(caja7))
		{
			alert('Codigo postal mal introducido');
			return false;
		}
	}
	return true;
}

function valida_email(caja4)
{
	if(!elcorreo.test(caja4))
	{
		return 'Has introducido mal el correo';
	}
	else
	{
		return '';
	}

}*/

function inicio(){
	var formulari=document.getElementById('caja1');
	formulari.addEventListener('blur',valida,false);
//	formulari.addEventListener('focus',entrar,false);	
	}
function entrar(){
	alert("en entrar caja1");	
	}
function valida(){
	var dato=document.getElementById('caja1').value;
	//formulario.value='hola';
	alert(elnombre.test(dato));
	if(!elnombre.test(dato))
	{
		alert('Nombre mal introducido');
		return false;
	}
//	alert(document.getElementById('caja1').validity.valid);
//(campo.value.match(RegExPattern))

	}
//document.addEventListener("blur",valida,false);
window.addEventListener('load',inicio,false);