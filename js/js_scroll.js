const MenuA = document.querySelectorAll(".item_menu")

MenuA.forEach(element =>{
	element.addEventListener("click",(event)=>{
		event.preventDefault()
		
		const blockId = element.getAttribute("href").slice(1)
		console.log(blockId)
		
		function scrollToELement(){
			const scrollTo = document.getElementById(blockId).scrollIntoView({
				behavior:"smooth"
			})
		}
		scrollToELement();
	});
});