const botton = document.querySelector("button")
const popan = document.querySelector(".popapdody")
const video = document.querySelector("canvas")
const bottonExitPopap = document.querySelector(".popap_exit")

botton.addEventListener("click",()=>{
	popan.classList.add("popap_open");
	bottonExitPopap.addEventListener("click",()=>{
		popan.classList.remove("popap_open");
	});
});