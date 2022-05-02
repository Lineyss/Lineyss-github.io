const bottonMenu = document.querySelectorAll(".li_item");
const bottonMenuA = document.querySelectorAll(".item_menu");
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
const a = document.querySelectorAll("a");
a.forEach(elementa =>{
	elementa.addEventListener("mouseenter", ()=>{
		elementa.classList.add("js_color")
	});
	elementa.addEventListener("mouseleave",()=>{
		elementa.classList.remove("js_color")
	});
});