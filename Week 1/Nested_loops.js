for (var year = 2023; year < 2025; year ++){
    console.log(year)
}

console.log('------------------')


for (var year = 2023; year < 2025; year ++){
    console.log(year)
    for( var month=6; month<9; month++){
        console.log('----------' + month)
    }
}


console.log('------------------')




for(var i=1; i<=10; i++){
    if(i==1){
        console.log("Gold medal");
    }else if(i==2){
        console.log("Silver Medal");
    }else if(i==3){
        console.log("Bronze medal");
    }else{
        console.log(i)
    }
}

console.log('------------------')

var i = 3;

switch(i){
    case  1:
        console.log("Gold Medal");
        break;
    case  2:
        console.log("Silver Medal");
        break;
    case  3:
        console.log("Bronze medal");
        break;
    default:
        console.log("No Medal")
    }
    