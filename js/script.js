// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


/*  let chiedi numero KM
    let chiedi età 
    cost sconto 1 (minorenni)
    cost sconto 2 (over 65)

    cost prezzo iniziale

    IF sconto minorenni || sconto over 65
        stampa prezzo socontato
    ELSE prezzo normale 
        stampa prezzo normale
    IF END

    */

let numberKM = parseInt(prompt("How many km do you have to travel?"));
let ageUser = parseInt(prompt("How old are you?"));
const priceKM = 0.21;

let priceTot = (numberKM * priceKM);
let discountUnder18 = ((priceTot * 20)/100);
let discountOver65 = ((priceTot * 40)/100);

if  (ageUser < 18)  {
    console.log(discountUnder18)
}

else if (ageUser > 65)  {
    console.log(discountOver65)
}

else console.log(priceTot)



