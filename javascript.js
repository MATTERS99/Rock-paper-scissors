function getComputerChoice() {
  let u = Math.ceil(1);
  let w = Math.floor(3);
  let choice = Math.floor(Math.random() * (w - u + 1) + u);
  switch (choice) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";
  }
}
a1.addEventListener("click",()=>playGame("rock"));

a2.addEventListener("click",()=>playGame("paper"));

a3.addEventListener("click",()=>playGame("scissors"));
function playGame(humanChoice){

    if(gameOver==true){
        return;
    }

    let c2=document.createElement("li");
    let c4=document.createElement("p");
    let c5=document.createElement("p");

    let compo=getComputerChoice();

    if(humanChoice===compo){
        // Draw
    }
    else if(
        (humanChoice==="rock" && compo==="scissors") ||
        (humanChoice==="paper" && compo==="rock") ||
        (humanChoice==="scissors" && compo==="paper")
    ){
        ++human;
    }
    else{
        ++comp;
    }

    c4.textContent="User: "+human;
    c5.textContent="Comp: "+comp;

    c2.appendChild(c4);
    c2.appendChild(c5);
    c1.appendChild(c2);

    if(human==5){
        let c6=document.createElement("p");
        c6.textContent="You won";
        document.body.appendChild(c6);
        gameOver=true;
    }
    else if(comp==5){
        let c6=document.createElement("p");
        c6.textContent="You lost";
        document.body.appendChild(c6);
        gameOver=true;
    }
}