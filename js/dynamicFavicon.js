var counter = 1;
	document.head = document.head || document.getElementsByTagName("head")[0];

	function changeFavicon(src) {
		var link = document.createElement("link");
		var oldLink = document.getElementById("dynamic-favicon");
		link.id = "dynamic-favicon";
		link.href= src;
		link.rel = "icon";
		link.type = "image/x-icon";
		document.head.removeChild(oldLink);
		document.head.appendChild(link);
	}

	function changeCounter() {
		if(counter === 9) counter = 1;
		var newSrc = "../img/favicons/favicon" + counter + ".png";
		changeFavicon(newSrc);
		setTimeout(changeCounter, 600);
		counter++;
	}

	changeCounter();
