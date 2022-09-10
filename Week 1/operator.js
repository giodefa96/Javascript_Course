console.log(15%4)  // mi ridà il resto di una divisione


/* 
Molto interessante è la questione dei booleani, 
quando voglio comparare due valori dovrò
stare attento a quello che sto comparando.
Poichè se utilizzo 2 uguali sto comparando solo il valore
e non il datatype.
Mentre se utilizzo tre uguali sto comparando sia il datatye
che il valore all'interno della variabile
*/

var numeroStringa = '100'
var numeroInt = 100

console.log(numeroStringa == numeroInt)
// il risultato è true...

console.log(numeroStringa === numeroInt)

// il risultato è false!