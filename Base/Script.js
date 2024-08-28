const choices=document.querySelectorAll(".icons");
const newGame=document.querySelector(".newGame");
const ngTitle=document.querySelector("#ng");
const scoreBP=document.querySelector("#playerId");
const scoreBC=document.querySelector("#comId");

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
	//console.log("UserSelection: ",userChoiceId);
	//console.log("ComputerSelection: ",selection[compChoice]);
	
	if(userChoiceId===selection[compChoice])
	{	
		
		ng.innerText=`! Draw ! You-${userChoiceId} & Comp-${selection[compChoice]}`;
		newGame.style.backgroundColor="#5BC0BE";
	}

	else if(userChoiceId==="rock"&&compChoice===1)
	{
		ng.innerText=`! You Lose ! You-${userChoiceId} & Comp-${selection[compChoice]}`;
		newGame.style.backgroundColor="red";
		computer++;
		scoreBC.innerText=computer;
		
	}
	else if(userChoiceId==="rock"&&compChoice===2)
	{
		ng.innerText=`! You Won ! You-${userChoiceId} & Comp-${selection[compChoice]}`;
		newGame.style.backgroundColor="green";
		player++;
		scoreBP.innerText=player;
	}

	else if(userChoiceId==="paper"&&compChoice===0)
	{
		ng.innerText=`! You Won ! You-${userChoiceId} & Comp-${selection[compChoice]}`;
		newGame.style.backgroundColor="green";
		player++;
		scoreBP.innerText=player;
	}
	else if(userChoiceId==="paper"&&compChoice===2)
	{
		ng.innerText=`! You Lose ! You-${userChoiceId} & Comp-${selection[compChoice]}`;
		newGame.style.backgroundColor="red";
		computer++;
		scoreBC.innerText=computer;
	}
	else if(userChoiceId==="scissors"&&compChoice===0)
	{
		ng.innerText=`! You Lose ! You-${userChoiceId} & Comp-${selection[compChoice]}`;
		newGame.style.backgroundColor="red";
		computer++;
		scoreBC.innerText=computer;
	}
	else if(userChoiceId==="scissors"&&compChoice===1)
	{
		ng.innerText=`! You Won ! You-${userChoiceId} & Comp-${selection[compChoice]}`;
		newGame.style.backgroundColor="green";
		player++;
		scoreBP.innerText=player;
	}
}

