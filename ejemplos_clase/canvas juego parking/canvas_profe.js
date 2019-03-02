parking=[[0,0,0,0],[1,0,2,0],[0,0,2,0],[0,0,0,0],[0,0,0,0]];
car1=[5,35,65,20];
car2=[155,35,65,50];
coord1=[1,0];
coord2=[1,2];
//coord3=[0,2];
function mover_dedo(e){
  alert("mover dedo");
  var touchobj = e.changedTouches[0]; // reference first touch point for this event
  var dist = parseInt(touchobj.clientX);
  statusdiv.innerHTML = 'Status: touchmove<br /> Horizontal distance traveled: ' + dist + 'px';
  e.preventDefault();
 }
function inicio(){
	box1 = document.getElementById("can_1");
	box1.addEventListener("touchmove", mover_dedo, false);
	dibujar_lineas();
//	dibujar_coche...
	dibujar_coche(2,car2[0], car2[1], car2[2], car2[3]);
	dibujar_coche(1,car1[0], car1[1], car1[2], car1[3]);
	}
function dibujar_coche(coche, posx, posy, ancho, largo){
	var canvas1=document.getElementById("can_1");	
	coche1 = canvas1.getContext("2d");
	switch (coche) {
		case 1:
		coche1.fillStyle = '#99CC00'; // verde
		break;
		case 2:
		coche1.fillStyle = '#FFFF00'; // amarillo?
		break;
	}
	coche1.fillRect(posx, posy, ancho, largo);
	}
function inicio2(parametro2){
//	alert("variable2: "+parametro2.keyCode);
	clearCanvas();
	car=seleccion();
//	alert("car: "+car);
	if (car==1)
	switch (parametro2.keyCode) {
			case 37: //izq
				temp=coord1[1]-1;
				if ((coord1[1]>0) && (parking[coord1[0]][temp]==0))	{
				parking[coord1[0]][temp]=1;//nova posicio coche 1
				parking[coord1[0]][coord1[1]]=0; //antigua posicio coche 1
				car1[0] = car1[0] - 75;
				coord1[1]--;
//				alert(coord1);
				}
//			alert("x1 "+x);
			break;
			case 39: //der
				temp=coord1[1]+1;
				if ((coord1[1]<3) && (parking[coord1[0]][temp]==0)){
				parking[coord1[0]][temp]=1;//nova posicio coche 1
				parking[coord1[0]][coord1[1]]=0; //antigua posicio coche 1
				car1[0] = car1[0] + 75;
				coord1[1]=coord1[1]+1;
//				alert(coord1);
				}
				break;
		}
	if (car==2)
	switch (parametro2.keyCode) {
				case 38: //arriba
				temp=coord2[0]-1;
//				alert(parking[temp][coord2[1]]);
//				alert(coord2[0]);
				if ((coord2[0]>0) && (parking[temp][coord2[1]]==0)){
//					alert("car2 "+coord2+" car1 "+coord1);
					parking[temp][coord2[1]]=2;
					temp2=coord2[0]+1;
					parking[temp2][coord2[1]]=0;
					car2[1] = car2[1] - 30;
					coord2[0]--;//actualitzo les dues 'x' del coche 2
				}
				break;
				case 40: //abajo
					temp=coord2[0]+2;
					if ((coord2[0]<3) && (parking[temp][coord2[1]]==0)){
//					alert("car2 "+coord2+" car1 "+coord1);
					parking[temp][coord2[1]]=2;
					parking[coord2[0]][coord2[1]]=0;
					car2[1] = car2[1] + 30;
					coord2[0]++;//actualitzo les dues 'x' del coche 2
				}
				break;
	}
	inicio();	
	}
	
function clearCanvas() {
		var canvas1=document.getElementById("can_1");	
		canvas1.width = canvas1.width;
		}
window.addEventListener("load",inicio,false);
window.addEventListener("keypress",inicio2,false);
