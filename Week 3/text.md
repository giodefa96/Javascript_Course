## global and local scope

Se definiamo una variabile all'interno di una determinata funzione questa sarà definita internamente, quindi si definisce come variabile di LOCAL SCOPE.

Mentre se definiamo una variabile esternamente ad una funzione questa si definisce variabile globale o di GLOBAL SCOPE


## let var and const

Posso usare let se il valore all'interno della variabile può cambiare nel tempo

Posso usare const se questo valore non cambierà mai nel tempo.

### esempio con var

    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead"

Vediamo come anche se greeter è stata dichiarata fuori, all'interno del if statement viene modificata. e magari questo è un comportamento che non vorremmo... ma non si può fare altro con questa metodologia


### esempio con let


   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined

in quessto  caso invece hello viene definito all'interno del if, qundi ha una valenza soltanto nel blocco in cui viene definita e di conseguenza all'estreno non avrà valenza!
Le variabili LET hanno block scope!

### altro esempio con let
una variabile let dichiarata una volta non può più essere ridichiarata!
quindi

    let greeting = "say Hi";
    greeting = "say Hello instead";
    
questo è ok!

    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared


questo no!


    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"

però se dichiaro la stessa variabile in scope diversi non avrò problemi! è un gioco abbastanza semplice però bisogna farci l'abitudine. Quindi let è ambito dipendente!


### CONST

mentre con cost al contrario che con let non posso ridichiarare 


    const greeting = "say Hi"; `
    greeting = "say Hello instead";// error: Assignment to constant variable. `


    const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared


Importante è poi che con CONST bisogna assegnare il valore subito dopo aver dichiarato una variabile!!!