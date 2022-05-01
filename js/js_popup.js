const aImg = document.querySelectorAll("a.imgA")
console.log(aImg)
const popap = document.querySelector("img.popapimg")
console.log(popap)
const button = document.querySelector(".popup_close")
aImg.forEach(element =>{
	element.addEventListener("click",(event)=>{
		event.preventDefault()
		
		const aImgId = element.getAttribute("href").slice(1)
		console.log(aImgId)
		
		const img = document.getElementById(aImgId)
		console.log(img)
		
		const imgAttribute = img.getAttribute("src")
		console.log(imgAttribute)
		
		const srcAttribute = popap.setAttribute("src", imgAttribute)
		console.log(srcAttribute)
		
		const popun = document.querySelector(".popup")
			popun.classList.add("popap_open");
		button.addEventListener("click",()=>{
			popun.classList.remove("popap_open");
		});
	});
});
