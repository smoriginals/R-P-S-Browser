const choices=document.querySelectorAll(".icons");
const newGame=document.querySelector(".newGame");
const ngTitle=document.querySelector("#ng");
const scoreBP=document.querySelector("#playerId");
const scoreBC=document.querySelector("#comId");
//topaz ai video enhancer 
let player=0;
let computer=0;
let selection=["rock","paper","scissors"];



choices.forEach((icons)=>{
	icons.addEventListener("click",()=>{
		let userChoiceId=icons.getAttribute("id");
		PlayGame(userChoiceId);
	});
});

let PlayGame=(userChoiceId)=>{
	GenerateRandom(userChoiceId);
}

let GenerateRandom=(userChoiceId)=>{
	let compChoice=Math.floor(Math.random()*selection.length);
	console.log("UserSelection: ",userChoiceId);
	console.log("ComputerSelection: ",selection[compChoice]);

	
	if(userChoiceId===selection[compChoice])
	{	
		console.log("Game Draw!!");
	}
	else if(userChoiceId==="rock"&&compChoice===1)
	{
		console.log("You Lose!");
	}
	else if(userChoiceId==="rock"&&compChoice===2)
	{
		console.log("You Lose!");
	}
	else if(userChoiceId==="paper"&&compChoice===2)
	{
		console.log("You Lose!");
	}
	else if(userChoiceId==="paper"&&compChoice===0)
	{
		console.log("You Won!");
	}
	else if(userChoiceId==="scissors"&&compChoice===0)
	{
		console.log("You Lose!");
	}
	else if(userChoiceId==="scissors"&&compChoice===2)
	{
		console.log("You Won!");
	}
	else
	{
		Draw(userChoiceId);
	}
}

let Winner=()=>{
	
}
let Lose=()=>{
	
}
