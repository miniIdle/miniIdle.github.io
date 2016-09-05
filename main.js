money=50;
energy=0;
robots=0;
ADVrobots=0;
PRGrobots=0;
ENGrobots=0;
panels=0;
panelCost=1000;
getRobot=function(){
	if (money >= 10){
		if (energy >= 1){
			money-=10;
			robots+=1;
			energy-=1;
			refresh();
		}
	}
}
getADVrobot=function(){
	if (robots >= 30){
		if (energy >= 1){
			robots-=30;
			energy-=1;
			ADVrobots+=1;
			refresh();
		}
	}
}
getPRGrobot=function(){
	if (ADVrobots >= 90){
		if (energy >= 1){
			ADVrobots-=90;
			energy-=1;
			PRGrobots+=1;
			refresh();
		}
	}
}
getENGrobot=function(){
	if (PRGrobots >= 270){
		if (energy >= 1){
			PRGrobots-=270;
			energy-=1;
			ENGrobots+=1;
			refresh();
		}
	}
}
getPanel=function(){
	if (money >= panelCost){
		money-=panelCost;
		panels+=1;
		panelCost*=10;
	}
	refresh();
}
refresh=function(){
	document.getElementById("panels").innerHTML=panels;
	document.getElementById("panelCost").innerHTML=panelCost;
	document.getElementById("money").innerHTML=money;
	document.getElementById("energy").innerHTML=energy;
	document.getElementById("robots").innerHTML=robots;
	document.getElementById("ADVrobots").innerHTML=ADVrobots;
	document.getElementById("PRGrobots").innerHTML=PRGrobots;
	document.getElementById("ENGrobots").innerHTML=ENGrobots;
}
importSave=function(){
	eval(prompt("Savecode:"));
}
exportSave=function(){
	alert("money=".concat(String(money).concat(";energy=".concat(String(energy).concat(";robots=".concat(String(robots).concat(";ADVrobots=".concat(String(ADVrobots).concat(";PRGrobots=".concat(String(PRGrobots).concat(";ENGrobots=".concat(String(ENGrobots).concat(";panels=".concat(String(panels).concat(";panelCost=".concat(String(panelCost).concat(";refresh();")))))))))))))))));
}
setInterval(function(){
	energy+=1+panels;
	money+=robots;
	robots+=ADVrobots;
	ADVrobots+=PRGrobots;
	PRGrobots+=ENGrobots;
	refresh();
},1000);
