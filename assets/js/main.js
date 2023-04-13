// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
// e l'età del passeggero
// -il prezzo del biglietto è definito in base ai km (0.21 € al km)
// -va applicato uno sconto del 20% per i minorenni
// -va applicato uno sconto del 40% per gli over 65.

function createTikets() {
    const distance = parseInt(prompt("quanti km devi fare?"));
    console.log(distance);
    const age = parseInt(prompt("Quanti anni hai?"));

    const priceKm = 0.21;
    // calcolare costo viaggio
    let priceVoyage = distance * priceKm;
    console.log(priceVoyage);

    if ( priceVoyage != NaN) {
        if (age < 18) {
            priceVoyage -= priceVoyage / 100 * 20;
        } else if (age > 65) {
            priceVoyage -= priceVoyage / 100 * 40;
        }
        priceVoyage = parseFloat(priceVoyage).toFixed(2);
        document.querySelector("h2").innerText = priceVoyage + " €";
    }
    if (isNaN(distance) || isNaN(age)) {
        alert ("non è un numero");
        document.querySelector("h2").innerText = "Ricarica la pagina";
    }

    // aplicare sconto se necessario

}






