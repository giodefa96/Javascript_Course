/*
syntax error può essere definito come quando scrivo un 
pezzo di codice che java non riesce a leggere
ex: dichiaro una varibile e ci assegno un valore di stinga 
ma mi dimentico di chiudere le virgolette.

Type error: provo a runnare un metodo su un numero
tipo (5).pop()

*/

console.log(a + b);
console.log("This line is never reached");

//throw new ReferenceError();

//Posso decidere di lanciare un errore
// con il comando throw

throw new ReferenceError();