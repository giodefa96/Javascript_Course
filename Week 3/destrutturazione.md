## Destruturare

Primo esempio che vorrei fare è questo

Per dichiarare un array in JavaScript abbiamo due possibilità:

    metodo 1:
    
    const firstarray = ['JavaScript', "Python", "Go"];

    metodo 2:

    const secondArray = new Array(3);
    secondArray[0] = "JavaScript";
    secondArray[1] = "Python";
    secondArray[2] = "Go";


Immaginiamo di voler estrarre dal nostro armadio un oggetto specifico, quindi il primo passo è estrarre tutto quello che abbiamo nel nostro armadio.
**La Destrutturazione** è l'atto di estrarre elementi da un array o un oggetto. E una volta presi questi elementi pssono essere modificati come più ci piace.

    const edibles = ["food", "fruits"];

    let [positionOne, positionTwo] = edibles;
    const temp = positionOne;

    positionOne = positionTwo;
    positionTwo = temp;
    console.log(positionOne, positionTwo);

    // fruits, food

questo esempio un po' particolare ci permette di comprendere come avviene la destrutturazone. Cioè noi abbiamo il nostro array edibles che contine due valori food and fruits. Successivamente destrutturiamo definendo due nuove variabili e dantogli il primo valore a positionOne e al positionTwo il secondo valore di edivles.
Poi alla variabile temp diamo il valore di positionOne ecc... cioè stiamo giocando con questi valori.


Altri esempi:


    const edibles = ["food", "fruits"];

    [edibles[0], edibles[1]] = [edibles[1], edibles[0]];
    console.log(edibles);

    // ["fruits", "food"]


### Destrutturazione Oggetti

Quando si destrutturano oggetti, utilizziamo parentesi graffe con il nome esatto di ciò che abbiamo nell'oggetto. A differenza degli array in cui è possibile utilizzare qualsiasi nome di variabile per decomprimere l'elemento, gli oggetti consentono solo l'uso del nome dei dati archiviati.

È interessante notare che possiamo manipolare e assegnare un nome di variabile ai dati che vogliamo ottenere dall'oggetto. Ora vediamo tutto questo nel codice.

    const freeCodeCamp = {
        frontend: "React",
        backend: "Node",
        database: "MongoDB"
    }

    const {frontend, backend} = freeCodeCamp
    console.log(frontend, backend);
    // react, node


    La stampa di ciò che abbiamo sulla console mostra il valore di frontend e backend. Vediamo ora come assegnare un nome di variabile all'oggetto che vogliamo decomprimere.
    

        const freeCodeCamp = {
        frontend: "React",
        backend: "Node",
        database: "MongoDB"
    }

    const {frontend: courseOne, backend: courseTwo} = freeCodeCamp
    console.log(courseOne, courseTwo);
    // react, node


Come puoi vedere, abbiamo courseOne e courseTwo come nomi dei dati che vogliamo decomprimere.

L'assegnazione di un nome di variabile ci aiuterà sempre a mantenere pulito il nostro codice, specialmente quando si tratta di lavorare con dati esterni quando vogliamo decomprimerli e riutilizzarli nel nostro codice.