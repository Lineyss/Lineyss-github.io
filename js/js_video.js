const buttonTringle = document.querySelector("nav.decoration_none")
console.log(buttonTringle)
buttonTringle.addEventListener("mouseenter",()=>{
	const video = document.querySelector("video")
	console.log(video)
	video.play();
});
buttonTringle.addEventListener("mouseleave",()=>{
	const video = document.querySelector("video")
	video.pause();
	video.currentTime = 0;
	video.load();
});