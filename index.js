//Zadanie 1

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

//Zadanie 2 (możliwość 1)

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

//Zadanie 2 (możliwość 2)

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


//Zadanie 3.

function TellNumber4 () {
    let number4 = prompt("Podaj jakis numer:", "1");
    parseInt(number4, 10) // przekonwertowałem na dzisietny, ale niewiele to zmienia dalej w "switch()"" tj. ze string byłoby tak samo - czy o to chodziło?
    let answer;
    switch (number4) {
        case '1':
            answer = "Zdałeś egzamin"
            break;
        case '2':
            answer = "Zaliczona tylko teoria"
            break;
        case '3':
            answer = "Zaliczona tylko praktyka"
            break;
        case '4':
            answer = "Egzamin do poprawy"
            break;
    }
    return answer
}

alert(TellNumber4())

//Zadanie 4.

function saySomething(name){
    return("something " + name)
}
alert(saySomething("is blue"))

//Zadanie 5.

function footballPoints(wygrane, remisy, porazki){
    return(wygrane * 3 + remisy * 2 + porazki * 0)
}
alert(footballPoints(10, 20, 5))

//Zadanie 6.

function animals(kurczak, krowa, swinia){
    return(kurczak * 2 + krowa * 4 + swinia * 4)
}
alert(animals(13, 3, 5))
