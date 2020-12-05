


// CREA OGGETTO PALLA
////////////////////////////////
// // var palla = {
// //   nome : palla,
// //   peso : 10
// // }
//  class palla {
//   constructor(nome, peso) {
//     this.nome = nome;
//     this.peso = peso;
//   }
// }
//
// var palla1 = new palla('palla', 10);
// console.log(palla1);


// MODIFICA PESO PALLA
/////////////////////////////////
// var nuovoPeso = Number(prompt('inserisci nuovo peso'));
// palla1.peso = nuovoPeso;
// console.log(palla1);




// ARRAY BICI
////////////////////////
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// var biciclette = [
//   {
//     nome : 'bici1',
//     peso : 22
//   },
//   {
//     nome : 'bici3',
//     peso : 24
//   },
//   {
//     nome : 'bici3',
//     peso : 1
//   },
//   {
//     nome : 'bici4',
//     peso : 20
//   }
// ];
// console.log(biciclette);
// for (var i = 1; i < biciclette.length; i++) {
//   var piuLeggera;
//   if(biciclette[i-1].peso < biciclette[i].peso ){
//     piuLeggera = biciclette[(i-1)];
//   }else{
//   piuLeggera = biciclette[(i)];
//   }
// }
// console.log(piuLeggera.nome);



// OGGETTO TRIANGOLO
////////////////////////////
// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza. Calcolare perimetro e area. (ripassiamo il Teorema di Pitagora ;D )
// var triangolo = {
//   base : 10,
//   altezza : 10
// }
//
// var area = (triangolo.base * triangolo.altezza)/2;
// console.log(area);
// var lato =Math.sqrt(((triangolo.base*triangolo.base)+(triangolo.altezza*triangolo.altezza)));
// console.log(lato);
// var perimetro = triangolo.base + triangolo.altezza + lato;
// console.log(perimetro);



// ARRAY SQUADRE DI CALCIO
////////////////////////////////
// var squadre = [
//   {
//     nome : 'juventus',
//     punti : 0,
//     falli : 0
//   },
//   {
//     nome : 'roma',
//     punti : 0,
//     falli : 0
//   },
//   {
//     nome : 'lazio',
//     punti : 0,
//     falli : 0
//   }
// ];



// ATTRIBUIRE PUNTI E FALLI CASUALI
//////////////////////////////////////////
// for (var i = 0; i < squadre.length; i++) {
//   squadre[i].punti = Math.floor(Math.random() * (10 - 0 + 1) ) + 0;
//   squadre[i].falli = Math.floor(Math.random() * (10 - 0 + 1) ) + 0;
// }
// console.log(squadre);




// ZUCCHINE
/////////////////////////////////
//
// class zucchina {
//   constructor(lunghezza,peso) {
//     this.lunghezza = lunghezza;
//     this.peso = peso;
//   }
// }
// var zucchine = [];
// var contatoreZucchine = 0;
// var quanteZucchine = 10;
// while (contatoreZucchine < quanteZucchine) {
//   var random1 = Math.floor(Math.random() * (20 - 10 + 1) ) + 10;
//   var random2 = Math.floor(Math.random() * (200 - 100 + 1) ) + 100;
//   var nuovaZucchina = new zucchina(random1, random2);
//   zucchine.push(nuovaZucchina);
//   contatoreZucchine++;
// }
// console.log(zucchine);
// var sommaPeso = 0;
// zucchine.forEach(function(e) {
//   sommaPeso += e.peso;
// });
// console.log(sommaPeso);




// FUNZIONE REVERSE
///////////////////////////////

// function reverseString (stringa){
//   var stringa;
//   var newStringa = '';
//   var partenza = stringa.length - 1;
//   for (var i = 0; i < stringa.length; i++) {
//     newStringa += stringa[partenza];
//     partenza--;
//   }
//   return newStringa;
// }
// var stringaDaInvertire = 'ciao'
// console.log(reverseString(stringaDaInvertire));



// ZUCCHINE 2
/////////////////////////

//
// class zucchina {
//   constructor(lunghezza,peso) {
//     this.lunghezza = lunghezza;
//     this.peso = peso;
//   }
// }
// var zucchine = [];
// var contatoreZucchine = 0;
// var quanteZucchine = 10;
// while (contatoreZucchine < quanteZucchine) {
//   var random1 = Math.floor(Math.random() * (20 - 10 + 1) ) + 10;
//   var random2 = Math.floor(Math.random() * (200 - 100 + 1) ) + 100;
//   var nuovaZucchina = new zucchina(random1, random2);
//   zucchine.push(nuovaZucchina);
//   contatoreZucchine++;
// }
// console.log(zucchine);
// var zucchineSotto15 = [];
// var zucchineSopra15 = [];
// zucchine.forEach(function(e) {
//   if (e.lunghezza < 15) {
//     zucchineSotto15.push(e);
//   }else{
//     zucchineSopra15.push(e);
//   }
// });
// console.log(zucchineSotto15);
// console.log(zucchineSopra15);
//
// var somma1 = 0;
// var somma2 = 0;
//
// zucchineSotto15.forEach(function(e){
//   somma1 += e.peso;
// });
// zucchineSopra15.forEach(function(e){
//   somma2 += e.peso;
// });
// console.log(somma1);
// console.log(somma2);


// FUNZIONE ALTERNATE
//////////////////////////
// function alternate(array1, array2){
//   var array1 ;
//   var array2 ;
//   var newArray = [];
//   var i = 0;
//   array1.forEach(function(e){
//     newArray.push(e);
//     newArray.push(array2[i]);
//     i++;
//   });
//   return newArray;
// }
// var arrayNumeri = [1,2,3];
// var arrayLettere = ['a','b','c'];
// console.log(alternate(arrayNumeri, arrayLettere));



// FUNZIONE SELEZIONE PER RANGE DI INDEX
//////////////////////////////////////////////
function rangeIndex(array1,num1,num2){

  var array1 ;
  var num1;
  var num2;
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    if (i >= num1 && i <= num2) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}


var arrayStart = ['ciao','ciccio','gino','marco','freeman'];
var start = 1;
var end = 3;
console.log(rangeIndex(arrayStart,start,end));
