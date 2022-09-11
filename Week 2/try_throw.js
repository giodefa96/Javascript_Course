try{
    throw new ReferenceError();
}catch(err){
    console.log(err);
    console.log('There was a Reference Error');
}
console.log("My program does not stop");

/*
Abbiamo  8 tipologie di errori.

ReferenceError: stiamo facendo riferimento
ad una variabile che non è stata dichiarata

SyntaxError: tutti le tipologie di codice
non valido


TypeError: tipo quando provo runnare un
metodo su un data-type non supportato


RangeError: 

 */