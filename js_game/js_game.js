const popap = document.querySelector(".popap")
const bottum = document.querySelector(".repeat")
function popapF (){
	popap.classList.add("popap_open");
	bottum.addEventListener("click", ()=>{
		document.location.reload();
	});
}

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

const foodImg = new Image();
foodImg.src = "img/hi.png";
let food = {
	x: Math.floor((Math.random()*12 + 1)) *50 ,
	y: Math.floor((Math.random()*10 + 1)) *50 
};

let snake = ["block", "block", "block"];
snake[0] = {
	x: 5 * 50,
	y: 6 * 50,
	
};
let score = 0 ;
	
let move = "right";
document.addEventListener("keydown", (event)=>{
	if(event.keyCode == 37 && move != "right"){
		move = "left";
	};
	if(event.keyCode == 39 && move != "left"){
		move = "right";
	};
	if(event.keyCode == 40 && move != "up"){
		move = "down";
	};
	if(event.keyCode == 38 && move != "down"){
		move = "up";
	};
})

function eatTail (head, arr){
	for(let i = 0; i < arr.length; i++){
		if(head.x == arr[i].x && head.y == arr[i].y){
			clearInterval(play);
			popapF();
		};
	};
};

function drow (){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle="white";
	ctx.font = "50px Arial";
	ctx.fillText(score , 359 ,45);
	
	ctx.drawImage(foodImg, food.x , food.y)
	let foodX = food.x;
	let foodY = food.y;
	
	let last = snake.length;
	snake.forEach(element =>{
		if (element == snake[0]){
			ctx.fillStyle = "orange";
			ctx.fillRect(element.x  , element.y  , 50 , 50);
		}else{
			ctx.fillStyle = "yellow ";
			ctx.fillRect(element.x  , element.y  , 50 , 50);
		};
	});
	
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	
	
	if (move == "right"){
		snakeX += 50;
	};
	if (move == "left"){
		snakeX -= 50;
	};
	if (move == "up"){
		snakeY -= 50;
	};
	if (move == "down"){
		snakeY += 50;
	};
	
	let block = {
		x: snakeX,
		y: snakeY
	};
	
	eatTail(block, snake);
	
	snake.unshift( block);
	snake.pop( block);
	
	if (snakeX == foodX && snakeY == foodY){
		snake.push( block);	
		score ++;
		food = {
			x: Math.floor((Math.random()*12 + 1)) *50 ,
			y: Math.floor((Math.random()*10 + 1)) *50 
		};		
	};
	
	if (snakeX== 0 || snakeX == 650 || snakeY == 0 || snakeY == 550  ){
		clearInterval(play);
		popapF();
		
	};
	
	if (snake.length == 121){
		clearInterval(play);
		popapF();
	};
};
const play = setInterval(drow , 100);