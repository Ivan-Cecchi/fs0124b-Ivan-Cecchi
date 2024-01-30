/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function findLargerInteger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

const num1 = 5;
const num2 = 10;
console.log("The larger integer is:", findLargerInteger(num1, num2));

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function checkNumber(number) {
  if (number !== 5) {
    console.log("not equal");
  }
}

checkNumber(3);
checkNumber(5);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

function checkDivisibleBy5(number) {
  if (number % 5 === 0) {
    console.log("divisible by 5");
  } else {
    console.log("not divisible by 5");
  }
}

checkDivisibleBy5(10);
checkDivisibleBy5(7);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function checkNumbers(num1, num2) {
  if (num1 === 8 || num2 === 8) {
    return true;
  }
  if (num1 + num2 === 8) {
    return true;
  }
  if (Math.abs(num1 - num2) === 8) {
    return true;
  }
  return false;
}

console.log(checkNumbers(3, 5)); // false
console.log(checkNumbers(8, 3)); // true
console.log(checkNumbers(3, 11)); // true
console.log(checkNumbers(5, 13)); // true

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
  function calculateTotalCheckoutAmount(totalShoppingCart) {
    const shippingCost = totalShoppingCart > 50 ? 0 : 10;
    return totalShoppingCart + shippingCost;
  }

  let totalShoppingCart = 60;
  let totalAmount = calculateTotalCheckoutAmount(totalShoppingCart);
  console.log("Total amount to be charged at checkout:", totalAmount);
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

{
  function calculateTotalCheckoutAmount(totalShoppingCart) {
    const discountedTotal = totalShoppingCart * 0.8;

    const shippingCost = discountedTotal > 50 ? 0 : 10;

    return discountedTotal + shippingCost;
  }

  let totalShoppingCart = 60;
  let totalAmount = calculateTotalCheckoutAmount(totalShoppingCart);
  console.log("Importo totale da addebitare al checkout:", totalAmount);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

{
  let num1 = 10;
  let num2 = 5;
  let num3 = 7;

  let highest, middle, lowest;

  if (num1 >= num2 && num1 >= num3) {
    highest = num1;
    if (num2 >= num3) {
      middle = num2;
      lowest = num3;
    } else {
      middle = num3;
      lowest = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    highest = num2;
    if (num1 >= num3) {
      middle = num1;
      lowest = num3;
    } else {
      middle = num3;
      lowest = num1;
    }
  } else {
    highest = num3;
    if (num1 >= num2) {
      middle = num1;
      lowest = num2;
    } else {
      middle = num2;
      lowest = num1;
    }
  }

  console.log("Sorted Numbers (Highest to Lowest):", highest, middle, lowest);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

{
  function isNumber(value) {
    
    return typeof value === "number" && !isNaN(value);
  }

 
  console.log(isNumber(5)); // true
  console.log(isNumber("5")); // false
  console.log(isNumber(NaN)); // false
  console.log(isNumber(undefined)); // false
  console.log(isNumber(null)); // false
  console.log(isNumber(true)); // false
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  // Example usage
  console.log(isEvenOrOdd(4)); // Outputs: Even
  console.log(isEvenOrOdd(7)); // Outputs: Odd
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

{
let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);
}

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
