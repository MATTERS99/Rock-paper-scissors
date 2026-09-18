function getComputerChoice() { 
    let u=Math.ceil(1);
    let w=Math.floor(3);
    return Math.floor(Math.random()*(w-u+1)+u);
}
let a=getComputerChoice();
console.log(a)

if (a===1) {
    console.log("rock");

} else if (a===2){
    console.log("paper");

} else{
    console.log("scissors");
}





