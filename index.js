//// ZJAZD 1. ////

// Zadanie 1

function TellNumber () {
    const number1 = prompt("Podaj jakis numer:", "1");
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
    const number2 = prompt("Podaj jakis numer:", "1");
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
    const number2 = prompt("Podaj jakis numer:", "1");
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
    const numberIn = prompt("Podaj jakis numer:", "1");
    const number4 = parseInt(numberIn)
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
    const number5 = prompt("Podaj poziom PH 0-14", "0");
    const number6 = parseInt(number5);
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

// // Zadanie 1. - operuje tylko na z góry założonej liczbie elementów tablicy (w tym przypadku 3)

// const cubeNumbers = [4,5,6]

// function sumOfCubes1(cube) {
//     cubesum = Math.pow(cube[0], 3) + Math.pow(cube[1], 3) + Math.pow(cube[2], 3);
//     return(cubesum)
// }

// console.log(sumOfCubes1(cubeNumbers))

// Zadanie 1. - operuje na dowolnej liczbie elementów tablicy (w tym przypadku 3)

const cubeNumbers = [2,100,5]
let a = 0
cubeNum1 = (cube) => {
    for (let i=0; i<cube.length; i++){
        a = a + Math.pow(cube[i], 3)
    }
    return a
}
// function sumOfCubes(cube){
//     for (let i=0; i<cube.length; i++){
//         a = a + Math.pow(cube[i], 3)
//     }
//     return a
// }

console.log(sumOfCubes(cubeNumbers))

// Zadanie 2.

const societyNames = ["Natalia", "Iwona", "Celina", "Ewelina"]
const tab1 = []
firstLetter = (names) => {
    for (let i=0; i<names.length; i++){
        tab1.push(names[i][0])
    }
    return tab1.sort()
}
// function societyName(names) {
//     for (let i=0; i<names.length; i++){
//         tab1.push(names[i][0])
//     }
//     return tab1.sort()
// }

console.log(societyName(societyNames))

// Zadanie 3.

const numbersTab = [-1,2,3,4,-10,5,6,7,80,9]
const tab2 = []
minMaxTabNum = (numTab) => {
    tab2.push(Math.min(...numTab))
    tab2.push(Math.max(...numTab))
    return tab2;
}
// function minMax(numTab){
//     tab2.push(Math.min(...numTab))
//     tab2.push(Math.max(...numTab))
//     return tab2
    
// }
console.log(minMax(numbersTab))

