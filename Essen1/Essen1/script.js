var erste = 1;

function rechner() {
    var a = document.getElementById('erste').valueAsNumber;
    var b = document.getElementById('zweite').valueAsNumber;
    var ergebnis = a + b;
    document.getElementById('ergebnis').innerHTML = ergebnis
}

