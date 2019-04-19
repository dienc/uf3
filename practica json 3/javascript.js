var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "theme": "dark",
  "dataProvider": 
  [
		{	
			"country": "Cornellà",
			"visits": 1500
			},
		{	
			"country": "L'Hospitalet",
			"visits": 1250
			},
		{	
			"country": "Sant Boi",
			"visits": 1175
			},
		{
			"country": "El Prat de Llobregat",
			"visits": 941
			},
		{
			"country": "Sabadell",
			"visits": 785
			},
		{
			"country": "Terrassa",
			"visits": 780
			},
		{
			"country": "Sant Vicenç del Horts",
			"visits": 720
			}/*,
		/*{
			"country": "Spain",
			"visits": 711
			},
		{
			"country": "Netherlands",
			"visits": 665
			},
		{
			"country": "Russia",
			"visits": 580
			},
		{
			"country": "South Korea",
			"visits": 443
			},
		{
			"country": "Canada",
			"visits": 441
			},
		{
			"country": "Brazil",
			"visits": 395
			}*/ 
	],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "export": {
    "enabled": true
  }

} );