//Zadanie 1

function TellNumber () {
    let number1 = prompt("Podaj jakis numer:", "1");
    if (number1 % 2 == 0)
        alert("Jest parzysta")
    else
        alert("Nie jest parzysta")
}

TellNumber()

//Zadanie 2 (możliwość 1)

function TellNumber1 () {
    let number2 = prompt("Podaj jakis numer:", "1");
    if (number2>=-35 && number2<2)
        alert("Jest w przedziale")
    else if (number2>11 && number2<=27)
        alert("Jest w przedziale")
    else
        alert("Nie jest w przedziale")
}

TellNumber1()

//Zadanie 2 (możliwość 2)

function TellNumber3 () {
    let number2 = prompt("Podaj jakis numer:", "1");
    if ((number2>=-35 && number2<2) || (number2>11 && number2<=27))
        alert("Jest w przedziale")
    else
        alert("Nie jest w przedziale")
}

TellNumber3()

Zadanie 3.

function TellNumber4 () {
    let number4 = prompt("Podaj jakis numer:", "1");
    parseInt(number4, 10) // przekonwertowałem na dzisietny, ale niewiele to zmienia dalej w "switch()"" tj. ze string byłoby tak samo - czy o to chodziło?
    switch (number4) {
        case '1':
            alert("Zdałeś egzamin")
            break;
        case '2':
            alert("Zaliczona tylko teoria")
            break;
        case '3':
            alert("Zaliczona tylko praktyka")
            break;
        case '4':
            alert("Egzamin do poprawy")
            break;
    }
}

TellNumber4()

//Zadanie 4.

function saySomething(name){
    alert ("something " + name)
}
saySomething("is blue")

//Zadanie 5.

function footballPoints(wygrane, remisy, porazki){
    alert(wygrane * 3 + remisy * 2 + porazki * 0)
}
footballPoints(10, 20, 5)

//Zadanie 6.

function animals(kurczak, krowa, swinia){
    alert(kurczak * 2 + krowa * 4 + swinia * 4)
}
animals(13, 3, 5)
