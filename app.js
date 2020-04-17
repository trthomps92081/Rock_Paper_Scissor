//global variables
const compChoicesArray = ["r", "p", "s"];
let compChoice

// prompt user to input r p or s.
let userChoice = prompt("choose R, P or S");
userChoice = userChoice.toLowerCase();
// if they type something else prompt again for r p or s. once a selection is made have computer randomly generate either r p or s.
if (userChoice !== "r" && userChoice !== "p" && userChoice !== "s") {
    alert("pick a either r, p , or s")
} else {
    const randomArrayPosition = Math.floor(Math.random() * 3)
    compChoice = compChoicesArray[randomArrayPosition]
    console.log(compChoice)
}
console.log("User Choice: " + userChoice)
console.log("Comp Choice: " + compChoice)
//then compare users selection to computers and output either win lose or draw.
if (userChoice === compChoice) {
    alert("Tie!")
} else if ((userChoice === "r" && compChoice === "s") || (userChoice === "s" && compChoice === "p") || (userChoice === "p" && compChoice === "r")) {
    alert("Winner!")
}
else {
    alert("Loser!")
}
