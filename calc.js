// Calculator JavaScript File

// 4 functions used in calculator
function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}

// Resets calculator values 
function resetButton(){
    document.getElementById("num1").value = '';
    document.getElementById("op").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("output").innerHTML = '';
}

// Calculates and displays answer based on users input
function calc(){
    let operator = document.getElementById("op").value;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let answerTxt = num1 + " " + operator + " " + num2 + " = ";
    switch(operator){
        case "+":
            document.getElementById("output").innerHTML = answerTxt + add(num1,num2);
            break;
        case "-":
            document.getElementById("output").innerHTML = answerTxt + subtract(num1,num2);
            break;
        case "*":
            document.getElementById("output").innerHTML = answerTxt + multiply(num1,num2);
            break;
        case "/":
            document.getElementById("output").innerHTML = answerTxt + divide(num1,num2);
            break;
        default:
            document.getElementById("output").innerHTML = "Error! Invalid Input.";
    }
}

