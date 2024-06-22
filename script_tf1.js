var video = null;
var description = null;
function fullScreen(){
	if (video == null){
		video = Array.from(document.getElementsByClassName("z-2")).filter(value => value.classList.contains("aspect-video"));
		video = (video != null && video.length > 0) ? video[0] : null;
	}
	if (video == null)
		return;
	if (description == null){
		description = video.parentElement.childNodes[1];
	}
	if (video.classList.contains("max-w-[950px]")){
		video.classList.replace("max-w-[950px]", "max-w-[1080px]");
		video.parentElement.parentElement.after(description);
	}else{
		video.classList.replace("max-w-[1080px]", "max-w-[950px]");
		video.after(description);
	}
	computeWidth();
}

function computeWidth(){
	if (video == null)
		return;
	if (video.classList.contains("max-w-[1080px]")){
		video.style.width= video.clientWidth * (window.innerHeight - 90) / video.clientHeight + "px";
		video.style.margin = "0 auto";
	}else{
		video.style.width = null;
		video.style.margin = "";
	}
}

var scriptObj = document.createElement("script");

window.addEventListener("message", function(event) {
	if (event.origin != 'https://prod-player.tf1.fr') {
		return;
	}
	if (event.data === "fullScreen")
		fullScreen();
});

document.body.append(scriptObj);
addEventListener("resize", (event) => {computeWidth();});