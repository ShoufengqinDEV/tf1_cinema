let isFullScreen = false;

function addButton(){
	let button = document.createElement("button");
	button.id = "buttonCinema";
	button.innerHTML = "<div style=\"width:20px;height:16px;border: 2px solid white;margin-right:10px;border-radius:2px\" title=\"Mode cinéma\"></div>";
	document.getElementsByTagName("ntrs-toolbar-right")[0].insertBefore(button, document.getElementsByTagName("ntrs-toolbar-right")[0].childNodes[0])
	let button2 = document.createElement("button");
	button2.innerHTML = "<div style=\"width:20px;height:16px;margin-left:10px\"></div>";
	button2.style.cursor="default";
	document.getElementsByTagName("ntrs-toolbar-right")[0].appendChild(button2);
	
	document.getElementById("buttonCinema").onclick = function(){
		window.parent.postMessage("fullScreen", '*');
		isFullScreen = !isFullScreen;
		document.getElementById("buttonCinema").firstChild.style.height = (isFullScreen ? "12px" : "16px");
	};
}

setTimeout(addButton, 500);