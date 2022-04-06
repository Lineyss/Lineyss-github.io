const link = document.querySelectorAll("a");
link.forEach(elemntLink =>{
	elemntLink.addEventListener("mouseenter" , ()=>{
		elemntLink.classList.add("js_color");
	});
	elemntLink.addEventListener("mouseleave",()=>{
		elemntLink.classList.remove("js_color")
	});
});
const bottonMenu = document.querySelectorAll(".li_item");
const bottonMenuA = document.querySelectorAll(".item_menu");
const bottonMenuLi = document.querySelectorAll("nav.menu_li_conteiner")
bottonMenu.forEach(elementLi =>{
	elementLi.addEventListener("mouseenter" , function (event){
		elementLi.classList.add("js_fon");
		const Bulls = true
	});
	elementLi.addEventListener("mouseleave", function (event){
		elementLi.classList.remove("js_fon");
	});
});
bottonMenuA.forEach(elementA =>{
	elementA.addEventListener("mouseenter", function(event){
		elementA.classList.add("js_color");
	});
	elementA.addEventListener("mouseleave", function(event){
		elementA.classList.remove("js_color")
	});
});
