// x=8;
// window.x=8;
// bazayin tarberakner
// 1. var (banali bar popoxakan haytarili bar) popoxakan var name = "martin"
// obyekt var me: ={
//     name: = "martin"
//     age: = ""16
// }
// 2.let (arandnahatkutyuny-2 het idi nman       )
// 3.const month: (hastatun     poxili hnaravorutyun chuny arjeqy  tarberutyun-aranc arjeq amal chi kam)

/**
 *
 *
 */
// callable

// let name ="martin", surname="martirosyan"

/*
t
ete-if
apa-{bloc scopen}
else-hakarak depqum
&&- ev
*/




/*
function mi qani tarberak haytararman hamar-

function, functiai anun, argumenti anun, dzevavor pakagtser(bloc)funkciayi marmin,



function calculateSQRT(NUMBER *)


*/
// var name = "martin1", age = "15", text, text;




// let Name = "martin2", Age = "22", Text;









/*



let x = {
    name: "martin",
    age: 16,
    phone: "05580888",
    addres: {
        sity: "goris",
        frends: [
            {
                name: "gor",
                age: "17"
            },
            {
                name: "Alen",
                age: "15",
            }
        ]
    }
}
*/




/*
unenanq x  popoxakan ete xy mets lini 8ic apa xin  veragrel 7 hakarak depqume ete x-y mets lini 6ic xin veragrel 5 hakarak depqum x-in veragrel 0
let x;
x=9
if (x > 8) {
    alert(x = 7)
} else if (x > 6) {
    alert(x = 5)
} else {
    alert(x = 0)
}

*/

// function
/*
funkcia-funkciai anun-funkciayi argumentner-{ bloc}-kod

let x = function (name, point = 0) {
    if (point >= 18) {
        return name + "Gerazancic e"
    } else if (point < 18 && point >= 12) {
        return name + "Harvacayin e"
    } else {
        return name + "Durs mnac";
    }
}
let y = x("Martin", 7);
alert(y);
*/

/*
()=>{

}

*/

// function multiplication(number1=0, number2=0, number3=0) {
//     // return number1*number2*number3;
//     if (number1 > 0 && number2 > 0 && number3 > 0) {
//         return (number1 * number2 * number3);
//     }
//     if (number1 > 0 && number2 > 0 ) {
//         return (number1 * number2);
//     }
//     if ( number2 > 0 && number3 > 0) {
//         return (number2 * number3);
//     }
//     if (number1 > 0 && number3 > 0 ) {
//         return (number1 * number3);
//     }
//     return "parametreri arjeqnery chen bavararum pahanjnerin";
// const formValidation = () =>{
// dacument.getElementByid(building)
// if(dacument.getElementByid (bulding))
// }





// homework-1

// Ստեղծել ֆունկցիա, որը կորոշի, թե արդյոք մուտքագրված թիվը կենտ է թե զույգ

function determiningOddAndEvenNumbers(number1) {
    if (typeof number1 !== "number") {   // պարզում ենք թե տրվածը թիվա թա չէ բայց
        console.log("Invalid input");
    }
    else if (number1 % 2 === 0) { // եթե թիվը 2-սի բաժանվելից մնացորդը 0յա ուրեմն թիվը զույգա
        console.log("is a couple");
    }
    else
        console.log("it is odd"); // եթե թիվը 2-սի բաժանվելից մնացորդը 0չի ուրեմն թիվը կենտ է 

}



// Ստեղծել ֆունկցիա, որը մուտքագրված 2 թվից մեծագույնը կորոշի
// alert(Math.max(2, 4))
const largestNumber = function (nub1, nub2) {
    // if (typeof nub1 && nub2 !== "number") {   // պարզում ենք թե տրվածը թիվա թա չէ բայց չշխադեց սա
    //     console.log("Invalid input")
    // }
    if (nub1 > nub2) {
        console.log(nub1)
    }
    else if (nub1 < nub2) {
        console.log(nub2)
    }
    else console.log("Invalid input")
}


//Ստեղծել ֆունկցիա, որը տրված երեք թվերը կդասավորի նվազման կարգով

const numbersDescendingOrder = function (nub1, nub2, nub3) {
    if (nub1 > nub2 && nub2 > nub3) {
        console.log(nub1 + "," + nub2 + "," + nub3);
    }
    else if (nub1 < nub2 && nub2 < nub3) {
        console.log(nub3 + "," + nub2 + "," + nub1)
    }
    else if (nub3 > nub1 && nub1 > nub2) {
        console.log(nub3 + "," + nub1 + "," + nub2)
    }
    else if (nub1 > nub3 && nub3 > nub2) {
        console.log(nub1 + "," + nub3 + "," + nub2)
    }
    else if (nub2 > nub3 && nub3 > nub1) {
        console.log(nub2 + "," + nub3 + "," + nub1)
    }
    else if (nub2 > nub1 && nub1 > nub3) {
        console.log(nub2 + "," + nub1 + "," + nub3)
    }
}
// function inputValidation(){
// if (dacument.getDacumentById("building").value){

// }
// }
let myname = "Martin Martirosyan"
for (let a of myname) {
    console.log(a)
}

let myname2 = "Martin Martirosyan"
for (let x in myname) {
    console.log(x)
}




