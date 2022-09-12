## OOP

Le fondamenta del paradigma **OOP** sono:
 - *inheritance*(ereditarietà)
 - *encapsulation*
 - *abstraction*
 - *polymorphism*

Bisogna ricordare come gli oggetti esistono in una struttura di ereditarietà, cioè ogni oggetto è costituito da una super classe dalla classe oggetto.

    class Animal { /* ...class code here... */ }

    var myDog = Object.create(Animal)

    console.log (Animal)

questo ci permette di utilizzare i metodi della classe oggetto tipo ```.create```, che permette di creare un istanza $\dots$

Per creare un nuovo oggetto da una classe si utilizza questo codice:

    class Animal { /* ...class code here... */ }

    var myDog = new Animal()

    console.log (Animal)

## L'ereditarietà

È la basa della **OOP**, dove esiste sempre una classe base da cui otteniamo proprietà utili!

All of this might sound a bit "computer-sciency", so here's a more practical example:

 - There is a base class of "Animal".

 - There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".

 - Next, there is another class, inheriting from "Bird", and this class is "Eagle".

Possiamo quindi definire che una classe figlia **estende** una classe genitore.

## Encapsulation

Semplicemente permette di nascondere il codice, cioè non permette agli utenti di osservare il codice sorgente. Però l'utente può utilizzare il metodo!! questo è l'importante.


## Astrazione

deve denotare le caratteristiche essenziali di un oggetto contraddistringuendolo da tutti gli altri oggetti e fornendo, in tal modo, dei confini concettuali ben precisi reòativamente alla prospettiva dell'osservatore.

Consideriamo una classe Animale, che incapsuli al suo interno tutte le caratteristiche (metodi e proprietà) che sono comuni a tutti gli animali.

Ad esempio, si potranno definire i metodi mangia() e respira() e le proprietà altezza e peso (solo per citarne alcuni). Ma, riflettendoci un attimo, appare chiaro che creare una istanza di un oggetto Animale ha poco senso visto che è certamente più consono definire istanze di oggetti specifici come Cavallo, Cane, Gatto, etc.

In un simile contesto la classe Animale, non potendo essere direttamente istanziata, rappresenta un dato astratto ed è denominata, in OOP, Classe Astratta, ovvero una classe che rappresenta, fondamentalmente, un modello per ottenere delle classi derivate più specifiche e più dettagliate.

![astrazione](/home/giodefa/Desktop/Lavoro/Corsi KPI6/Javascript_Course/Week 3/13a.png)

In una classe astratta, solitamente sono contenuti pochi metodi (di solito uno o due) per i quali è fornita anche l'implementazione mentre per tutti gli altri metodi è presente soltanto una mera definizione del metodo stesso ed è, pertanto, necessario (ed obbligatorio) che tutte le classi discendenti ne forniscano la opportuna implementazione.

I metodi appartenenti a questa ultima tipologia (e che sono definiti nella classe astratta) prendono il nome di Metodi Astratti. Nel caso limite in cui una classe astratta contenga soltanto metodi astratti allora essa verrà catalogata più correttamente come interfaccia (vedasi paragrafo inerente le interfacce).

## Polymorphism

    const bicycle = {
        bell: function() {
            return "Ring, ring! Watch out, please!"
        }
    }   
    const door = {
     bell: function() {
         return "Ring, ring! Come here, please!"
     }
    }


    function ringTheBell(thing) {
        console.log(thing.bell())
    }


    ringTheBell(bicycle); // Ring, ring! Watch out, please!


    ringTheBell(door); // "Ring, ring! Come here, please!"


## Constructor
Non tutti gli oggetti hanno un costruttore. In base alle esigenze dell'oggetto verrà costituito un costruttore.

    function Icecream(flavor) {
        this.flavor = flavor;
        this.meltIt = function() {
            console.log(`The ${this.flavor} icecream has melted`);
        }
    }

    let kiwiIcecream = new Icecream("kiwi");
    let appleIcecream = new Icecream("apple");
    kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
    appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}