
var number = document.getElementById("input");

//first section getNum
function getNum(num) {
    switch (num) {
        case 1: number.value += "1";
            break;
        case 2: number.value += "2";
            break;
        case 3: number.value += "3";
            break;
        case 4: number.value += "4";
            break;
        case 5: number.value += "5";
            break;
        case 6: number.value += "6";
            break;
        case 7: number.value += "7";
            break;
        case 8: number.value += "8";
            break;
        case 9: number.value += "9";
            break;
        case 0: number.value += "0";
            break;
    }

}
//secound section operator
function opertion(op) {
    switch (op) {
        case '+': number.value += '+';
            break;
        case '/': number.value += '/';
            break;
        case 'X': number.value += '*';
            break;
        case '-': number.value += '-';
            break;
    }

}
//third section answer
function compute() {
    var res = document.getElementById("result");
    var ans = Math.floor(+eval(number.value));
    res.value = ans;

}
//section of clearInput

function clearInput() {
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";


}