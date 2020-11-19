//// ZJAZD 1. ////

// Zadanie 1

function TellNumber () {
    let number1 = prompt("Podaj jakis numer:", "1");
    let answer;
    if (number1 % 2 == 0)
        answer = "Jest parzysta"
    else
        answer = "Nie jest parzysta"
return answer
}

alert(TellNumber())

// Zadanie 2 (możliwość 1)

function TellNumber1 () {
    let number2 = prompt("Podaj jakis numer:", "1");
    let answer;
    if (number2>=-35 && number2<2)
        answer = "Jest w przedziale"
    else if (number2>11 && number2<=27)
        answer = "Jest w przedziale"
    else
        answer = "Nie jest w przedziale"
return answer
}

alert(TellNumber1())

// Zadanie 2 (możliwość 2)

function TellNumber3 () {
    let number2 = prompt("Podaj jakis numer:", "1");
    let answer;
    if ((number2>=-35 && number2<2) || (number2>11 && number2<=27))
        answer = "Jest w przedziale"
    else
        answer = "Nie jest w przedziale"
return answer
}
alert(TellNumber3())


// Zadanie 3.

function TellNumber4 () {
    let numberIn = prompt("Podaj jakis numer:", "1");
    let number4 = parseInt(numberIn)
    let answer;
    switch (number4) {
        case 1:
            answer = "Zdałeś egzamin"
            break;
        case 2:
            answer = "Zaliczona tylko teoria"
            break;
        case 3:
            answer = "Zaliczona tylko praktyka"
            break;
        case 4:
            answer = "Egzamin do poprawy"
            break;
    }
    return answer
}

alert(TellNumber4())

// Zadanie 4.

function saySomething(name){
    return("something " + name)
}
alert(saySomething("is blue"))

// Zadanie 5.

function footballPoints(wygrane, remisy, porazki){
    return(wygrane * 3 + remisy * 2 + porazki * 0)
}
alert(footballPoints(10, 20, 5))

// Zadanie 6.

function animals(kurczak, krowa, swinia){
    return(kurczak * 2 + krowa * 4 + swinia * 4)
}
alert(animals(13, 3, 5))

// Zadanie 7.

function factorial(n)
{
    let number7=1;
    for (let i = 2; i <= n; i++)
        number7 = number7 * i;
    return number7;
}

alert(factorial(6))

// Zadanie 8.

function inkLevels({magneta, cyan, yellow}) {
    numberMin = Math.min(cyan, magneta, yellow)
    return numberMin
}

console.log(inkLevels({"cyan" : 11, "magneta" : 12, "yellow" : 10}))

// Zadanie 9.

function phLevel() {
    let number5 = prompt("Podaj poziom PH 0-14", "0");
    let number6 = parseInt(number5);
    let answer;
    switch (true) {
        case (number6 >= 0 && number6 <= 6):
            answer = "Kwaśna"
            break;
        case (number6 >= 8 && number6 <= 14):
            answer = "Zasadowa"
            break;
        case (number6 == 7):
            answer = "Obojętna"
            break;
        default:
            answer = "Poza zakresem"
            break;
    }
    return answer
}

alert(phLevel())

//// ZJAZD 2. ////

// Zadanie 1.

const cubeNumbers = [4,5,6]

function cubenum(cube) {
    cubesum = Math.pow(cube[0], 3) + Math.pow(cube[1], 3) + Math.pow(cube[2], 3);
    return(cubesum)
}

console.log(cubenum(cubeNumbers))
