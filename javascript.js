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



function getHumanChoice() {
    let a = prompt("enter your choice");
    return a;
}


let human = 0;
let comp = 0;
function play() {
    let hum = getHumanChoice();//string
    let compo = getComputerChoice();//string
    if (hum === "rock") {
        if (compo === "scissors") {
            ++human;
        } else if (compo === "paper") {
            ++comp;
        } else {

        }

    }
    if (hum === "scissors") {
        if (compo === "paper") {
            ++human;
        } else if (compo === "rock") {
            ++comp;
        } else {

        }

    }
    if (hum === "paper") {
        if (compo === "rock") {
            ++human;
        } else if (compo === "scissors") {
            ++comp;
        } else {

        }

    }
    console.log("human:",hum);
    console.log("computer:",compo);
}



for (let i = 1; i <= 5; ++i)
    play()

if (human > comp) {
    console.log("human wins")
} else if (comp > human) {
    console.log("computer wins")
} else {
    console.log("no one wins")
}
console.log('a');



