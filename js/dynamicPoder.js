var wc = 0;
var wl = 0;
var up = true;

let words = ["OBTENER", "COMPARTIR", "DONAR", "VENDER", "GESTIONAR"];
if(lang == "en") words = ["COLLECTING", "SUMMARIZING", "SHARING", "DONATING", "SELLING", "MANAGING", "CONTRIBUTING WITH"];
else if(lang == "de") words = ["", " zu SAMMELN", " zu ORGANISIEREN", " zu SPENDEN", " zu VERKAUFEN"];

document.body = document.body || document.getElementsByTagName("body")[0];

function changeText() {
	if(up) wl++;
	else wl--;

	if(up == true && wl > words[wc].length) {
		up = false;
		setTimeout(changeText, 3000);
	} else if(up == false && wl < 0)  {
		up = true;
		wc = (wc + 1) % words.length;
		if(lang == "es") document.getElementById("poder").innerHTML = "El PODER de tus datos medicos";
		else if(lang == "en") document.getElementById("poder").innerHTML = "The POWER of your medical records";
		else document.getElementById("poder").innerHTML = "Die Macht deiner Gesundheitsdaten";
		setTimeout(changeText, 1000);
	} else {
		var word = words[wc].slice(0,wl);
		if(word != "" && wl < words[wc].length) word += "|";
		if(lang == "es") document.getElementById("poder").innerHTML = "El PODER de "+word+" tus datos médicos";
		else if(lang == "en") document.getElementById("poder").innerHTML = "The POWER of "+word+" your medical records";
		else if(lang == "de") document.getElementById("poder").innerHTML = "Die Macht deiner Gesundheitsdaten"+word;
		setTimeout(changeText, (up == true ? 250 : 100));
	}
}

changeText();
