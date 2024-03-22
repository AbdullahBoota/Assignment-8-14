// clear Statement
document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerText = ""
}

// clear Statement
document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerText = ""
}


// ConcatenateSomeStrings
document.getElementById("ConcatenateSomeStrings").onclick = function () {
    let message = "Good day";
    let name = "Abdullah";
    let banger = "!";

    console.log(message + name + banger);
    // Good dayAbdullah

    document.getElementById("output").innerHTML = message + " " + name + banger;
};

// Ask Name From User
document.getElementById("AskNameFromUser").onclick = function() {
    let firstName = prompt("Please enter your name");
};

// Comparison Operators
document.getElementById("comparisonOperators").onclick = function() {
    var num1 = 16;
    var num2 = 16;
    if (num1 >= num2) {
        alert("Yes your condition is true. The 16 = 16");
    } else {
        alert("Your condition not true. The 15 >= 16 ");
    }   
};

// Testing Sets of Condition
document.getElementById("TestingSetsofCondition").onclick = function () {
    var age = +prompt("Your age?");
    var weight = +prompt("Your weight?"); 

    if (age >= 18 && weight <= 17)  {
        console.log("You are a smart man.");
    } else if (age >= 18 && weight > 70 )  {
        console.log("You are  faty guy");
    } else {
        console.log ("You are a baby");
    }
};

// ifStatementsNested
document.getElementById("ifStatementsNested").onclick = function () {
    let age = +prompt("Your age?");

    if (age >= 18){
        let weight = +prompt("Your weight?");

        if (weight <= 70) {
            console.log("You,re a smart man.");
        } else {
            console.log("You are a faty guy");
        }
    } else {
        console.log("You are a baby");
    }
};























































