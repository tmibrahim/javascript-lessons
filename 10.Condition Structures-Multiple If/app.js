// Multiple if

//Example
// Name and TCK 
//name1 : Should not empty.
//Tckn : Should be 11 character

let name1 = prompt("Enter your name :");
let tckn = prompt("Enter your TCKN :");

// check function:

// check(name1, tckn);

//If else : It uses if there is two options.
//If else if else: It uses if tehre is more than 2 options.
// function check(name1, tckn){
//     if(name1!=""){
//         if(tckn.length == 11){
//             console.log("Name and TCKN entered successfuly!");
//         }else{
//             console.log("Please enter your TCKN as it 11 charcter!");
//         }

//     }else{
//         console.log("Please fill the name area!");
//     }
// }

//-------------------------

check2(name1, tckn);

function check2(name1, tckn){
    if(name1==""){
        console.log("Name area must be filled!");
        return;
    }
    if(tckn.length!=11){
        console.log("Please enter your TCKN number as it 11 character");
        return;
    }

    console.log("Name and TCKN entered successfuly!");
}