/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

{
  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

{
  function alphabetizeArray(arr) {
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }

  alphabetizeArray(pets);

  console.log(pets);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

{
  function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  reverseArray(pets);

  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

{
  const pets = ["dog", "cat", "hamster", "redfish"];

  for (let i = 0; i < 1; i++) {
    const firstElement = pets.shift();
    pets.push(firstElement);
  }

  console.log(pets);
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

{
  for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = "GR" + i + "83XW";
  }

  console.log(cars);
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

{
  cars.push({
    brand: "Hyundai",
    model: "i20-N",
    color: "skyblue",
    trims: ["normal", "TechnoPack"],
    licensePlate: "GR383XW",
  });

  const carsCopy = [];
  cars.concat(carsCopy);

  for (let i = 0; i < carsCopy.length; i++) {
    delete carsCopy[i].trims;
  }

  console.log(cars);
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

{
 
  const justTrims = [];

  for (let i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0]);
  }

  console.log(justTrims);
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

{
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].color.charAt(0) === "b") {
      console.log("Fizz");
    } else {
      console.log("Buzz");
    }
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

{
  let i = 0;
 
  while (i < numericArray.length) {
    console.log(numericArray[i]);
    if (numericArray[i] === 32) {
      break;
    }
    i++;
  }
  
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

{
  const charactersArray = ["g", "n", "u", "z", "d"];
const positionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
    switch (charactersArray[i]) {
        case 'a': positionsArray.push(1); break;
        case 'b': positionsArray.push(2); break;
        case 'c': positionsArray.push(3); break;
        case 'd': positionsArray.push(4); break;
        case 'e': positionsArray.push(5); break;
        case 'f': positionsArray.push(6); break;
        case 'g': positionsArray.push(7); break;
        case 'h': positionsArray.push(8); break;
        case 'i': positionsArray.push(9); break;
        case 'j': positionsArray.push(10); break;
        case 'k': positionsArray.push(11); break;
        case 'l': positionsArray.push(12); break;
        case 'm': positionsArray.push(13); break;
        case 'n': positionsArray.push(14); break;
        case 'o': positionsArray.push(15); break;
        case 'p': positionsArray.push(16); break;
        case 'q': positionsArray.push(17); break;
        case 'r': positionsArray.push(18); break;
        case 's': positionsArray.push(19); break;
        case 't': positionsArray.push(20); break;
        case 'u': positionsArray.push(21); break;
        case 'v': positionsArray.push(22); break;
        case 'w': positionsArray.push(23); break;
        case 'x': positionsArray.push(24); break;
        case 'y': positionsArray.push(25); break;
        case 'z': positionsArray.push(26); break;

        default: positionsArray.push(-1);
    }
}

console.log(positionsArray);

}