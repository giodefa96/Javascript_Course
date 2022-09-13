const { boolean } = require("yargs");

dishes = {
    'Italian Pasta': 9.55,
    'Rice with veggies ': 8.65,
    'Chicken with potatoes': 15.55,
    'Vegetarian Pizza': 6.45
};

function getPrice(booly){
    try{
        condizione = (typeof(booly)== 'boolean');
        if(condizione == true){
            if(booly == true){
                console.log("Prices with 20% tax: ")
                for(key in dishes){
                    console.log(`Dish:${key} Price (incl.tax): ${dishes[key] * 1.2}`)
                }
            }else{
                console.log("Prices without tax:")
                for(key in dishes){
                    console.log(`Dish:${key} Price (incl.tax): ${dishes[key]}`)
            }
        
            }
        }else{
            console.log("Hai inserito un paramentro non corretto! Inserisci un valore booleano!")
        }
    }catch(err){
        console.log(err)
    }
    

}


try{
    getPrice(ciao)
}catch(err){
    console.log("Error")
}