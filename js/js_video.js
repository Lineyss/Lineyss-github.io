const botton = document.querySelector("button")
console.log(botton)
const popan = document.querySelector(".popapdody")
const video = document.querySelector("video")
botton.addEventListener("click",()=>{
	popan.classList.add("popap_open");
	popan.addEventListener("mouseenter",()=>{
		video.play();
	});
	popan.addEventListener("mouseleave",()=>{
		video.pause();
		popan.classList.remove("popap_open");
		video.currentTime = 0;
		video.load();
	});
});