var numberA = 0;
var numberB = 0;
var string = "";
var operation = "";
var score = 0;
var isScore = false;

function number(n) {
    if (isScore == true) {
        isScore = false;
        string = "";
    }
    string += n;
    document.getElementById("scoreWindow").innerHTML = string;
}

function operation2Var(sign) {
    if (operation != "")
        countScore();
    numberA = parseFloat(string);
    operation = sign;
    showOperationSign();
    string = "";
    document.getElementById("scoreWindow").innerHTML = "0";
}

function operation1Var(sign) {
    if (operation != "")
        countScore();
    numberA = parseFloat(string);
    operation = sign;
    showOperationSign();
    countScore();
}

function oppositeSign() {
    string = parseFloat(string) * (-1);
    document.getElementById("scoreWindow").innerHTML = string;
}

function deleteLast() {
    string = "";
    document.getElementById("scoreWindow").innerHTML = 0;
}

function clearAll() {
    numberA = 0;
    numberB = 0;
    string = "";
    operation = "";
    score = 0;
    isScore = false;
    document.getElementById("dataWindow").innerHTML = "";
    document.getElementById("scoreWindow").innerHTML = 0;
}

function countScore() {
    if (string == "")
        numberB = 0;
    else
        numberB = parseFloat(string);
    isScore = true;
    switch (operation) {
        case "-":
            score = numberA - numberB;
            break;
        case "+":
            score = numberA + numberB;
            break;
        case "*":
            score = numberA * numberB;
            break;
        case "/":
            if (numberB == 0)
                score = "Nie można dzielić przez zero!";
            else
                score = numberA / numberB;
            break;
        case "√":
            score = Math.sqrt(numberA);
            break;
        case "^":
            score = Math.pow(numberA, numberB);
            break;
        case "%":
            score = numberA / 100;
            break;
        case "1/":
            score = 1 / numberA;
            break;
    }
    if (operation != "√" && operation != "1/" && operation != "%")
        showNumberB();
    operation = "";
    showScore();
    if (score != "Nie można dzielić przez zero!" && score != NaN && score != Infinity && score != -Infinity)
        string = score;
    else
        string = "0";
}

function showOperationSign() {
    if (operation == "√" || operation == "1/") {
        document.getElementById("dataWindow").innerHTML = operation + numberA;
    } else if (operation == "%") {
        document.getElementById("dataWindow").innerHTML = numberA + operation;
    } else {
        document.getElementById("dataWindow").innerHTML = numberA + " " + operation;
    }
}

function showNumberB() {
    if (operation != "") {
        document.getElementById("dataWindow").innerHTML = numberA + " " + operation + " " + numberB;
    }
}

function showScore() {
    document.getElementById("scoreWindow").innerHTML = score;
}
