// Var - Let - Const

//Değişken Nedir

/*

var/let/const degiskenIsmi = degiskenDegeri;

let sayi = 10;

*/

// var: function scope -- ram'de çok fazla yer kaplar

// function selamVer(){
//     var selam = "Herkese Selam"; //function scope
//     if (true) {
//         var b = 10;
        
//         // console.log(b);
//     }
//     console.log(b);
//     console.log(selam);
// }

// selamVer();

// let/const: block scope özelliğine sahiptir
// function selamVer(){
//     var selam = "Herkese Selam"; //function scope
//     if (true) {
//         const b = 10;
        
//         console.log(b);
//     }
//     console.log(selam);
// }

// selamVer();


// var a = 4;
// var a = 5;
// console.log(a);

// if (true) {
//     let a = 3;
//     let b = 4;

//     console.log(a);
// }

// LET & CONST arasındaki fark ?

// const (constant) : sabit, değişmez.

// const a = 10;
// a = 15; //değişemez olduğu için hata verir

// console.log(a);

// let b = 3;
// b = 4
// b = 6
// console.log(b);

// let user = {
//     username : "testuser",
//     password : "123"
// }

// user = { age : 23 }; //değiştirebilir çünkü let


// console.log(user);



// const user = {
//     username : "testuser",
//     password : "123"
// }

// user = { age : 23 }; //değiştirilemez hata verir çünkü const


// console.log(user);

// const user = {
//     username : "testuser",
//     password : "123"
// }

// user.username="ibrahim"; //değiştirebilir çünkü user objesini değil objenin içindeki username'i değiştirebilirim


// console.log(user);

