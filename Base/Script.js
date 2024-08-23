const choices=document.querySelectorAll(".icons");
const newGame=document.querySelector(".newGame");
const ngTitle=document.querySelector("#ng");
const scoreBP=document.querySelector("#playerId");
const scoreBC=document.querySelector("#comId");
//topaz ai video enhancer 
let player=0;
let computer=0;




choices.forEach((icons)=>{
	icons.addEventListener("click",()=>{
		let userChoiceId=icons.getAttribute("id");
		ComputerChoice(userChoiceId);
	});
});

let ComputerChoice=(userChoiceId)=>{
	let userChoice=["rock","paper","scissors"];
	let computerIdx=Math.floor(Math.random()*userChoice.length);
	console.log(`User : ${userChoiceId} And ${userChoice[computerIdx]}`);
};