var chart = AmCharts.makeChart( "chartdiv", {
	"type": "pie",
	"theme": "light",
	"outlineColor":"",
	"dataLoader":{
	"url":"datos.json",
	"format":"json"
	 } ,
	"valueField": "votos",
	"titleField": "partido",
	"colorField":"color",
	"labelColorField":"color",
	"balloon":{
	"fixedPosition":true
	},

  "export": {
    "enabled": false
	}

} );
