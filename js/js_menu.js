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


//function openbox () {
//	bottonMenuLi.forEach(elementLi_Li =>{
//		elementLi_Li.addEventListener("mouseenter" , ()=>{
//				elementLi_Li.classList.add("menu_li_conteiner_on")
//		})
//	})
//}
//function openbox_remove () {
//	display = document.getElementById("box").style.display;
//	if (display == "block"){
//		document.getElementById("box").style.display ="","none";
//	}
//}


//function Li () {
//	bottonMenu.forEach(elementLi =>{
//		elementLi.addEventListener("mouseenter", function(){
//			const BullsLi = elementLi.classList.add("js_fon")
//		})
//	})
//}
//function Li_remove () {
//	bottonMenu.forEach(elementLi =>{
//		elementLi.addEventListener("mouseenter", function(){
//			elementLi.classList.remove("js_fon")
//		})
//	})
//}


//function Menujs (){
//	bottonMenuA.forEach(elementA =>{
//		elementA.addEventListener("mouseenter" , function (){
//			let BullsA = elementA.classList.toggle("js_color");
//			if (BullsA == true){
//				openbox ();
//				Li();
//				elementA.addEventListener("mouseleave", () =>{
//					elementA.classList.remove("js_color")
//					Li_remove();
//					openbox_remove(box);
//				})
//			}
//		})
//	})
//}
//