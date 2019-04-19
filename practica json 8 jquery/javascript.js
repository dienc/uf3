//ARXIU JAVASCRIPT

	//imprimirem l'objecte al html
$(document).ready(function(){
	$.getJSON("http://data.fixer.io/api/latest?access_key=e10d76e273cc0c21019b6fc8bfffc67d&format=1", function(data){


		//var data_parsed = JSON.parse(data);

		console.log(data);
		document.write("Divisa Base: "+ data.base+ "<br> Data: "+data.date);
		document.write("<br> Canvis ");
		document.write("<br>USD: "+data.rates.USD);
		document.write("<br>GBP: "+data.rates.GBP);
		document.write("<br>AUD: "+data.rates.AUD);
		document.write("<br>JPY: "+data.rates.JPY);
		
	} );

});

