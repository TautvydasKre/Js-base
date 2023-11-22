/** @format */

"use strict";
// const tekstas = "Tautvydas kreivys ";
// const str = "Petras petraitis";
// const together = tekstas.concat(str);
// console.log(together);

// let text1 = "       Laba diena           ";
// let text2 = "Kaip Sekasi ";
// let text3 = "Ka dabar daryti";

// let concatenatedText = text1.concat(text2, text3).charAt(5);
// console.log(concatenatedText);

// let concatenatedText = text1.endsWith("");
// console.log(concatenatedText);

// let concatenatedText = text1.indexOf("Laba");
// console.log(concatenatedText);

// let concatenatedText = text1.length;
// console.log(concatenatedText);

// let concatenatedText = text1.match("diena");
// console.log(concatenatedText);

// let concatenatedText = text1.repeat("3");
// console.log(concatenatedText);

// let concatenatedText = text1.replace("diena", "ryteli");
// console.log(concatenatedText);

// let concatenatedText = text1.search("na");
// console.log(concatenatedText);

// let concatenatedText = text1.slice(3, 6);
// console.log(concatenatedText);

// let concatenatedText = text1.split(" ");
// console.log(concatenatedText);

// let concatenatedText = text1.substring(5, 9);
// console.log(concatenatedText);
// let concatedText = text1.substring(5, 9);
// let toUpper = text1.charAt(5).toUpperCase();
// let subs = text1.substring(6, 10);
// let concated = toUpper.concat(subs);
// let text = text1.replace("diena", concated);
// let changed = text1.replace("d", "D");
// console.log(concatedText);
// console.log(toUpper);
// console.log(subs);
// console.log(concated);
// console.log(text);
// console.log(changed);

// let concatenatedText = text1.trim();
// console.log(concatenatedText);

// let x = 5;
// console.log(++x);
// let xc = 5;
// console.log(xc++);
// let xv = 5;
// console.log(--xv);
// let xb = 5;
// console.log(xb--);

// let str = "Tautvydas Kreivys";
// str = "Kristupas Kolumbas";
// console.log(str);

// let nr = 5;
// console.log(nr);
// console.log(++nr);
// console.log(++nr);

// let mNr = 5;
// console.log(mNr);
// console.log(--mNr);
// console.log(--mNr);
// console.log(--mNr);

// let sNr = "12";
// console.log(typeof sNr);
// console.log(typeof Number(sNr));
// console.log(typeof parseInt(sNr, 10));
// console.log(typeof parseFloat(sNr));

// let dNr = 12;
// let sk = 10 * dNr;
// console.log(sk);

// let tomasWeight = 90;
// let tomasHeight = 1.77;
// let tomasKmi = tomasWeight / tomasHeight ** 2;
// console.log(tomasKmi);

// let tadasWeight = 40;
// let tadasHeight = 2.25;
// let tadasKmi = tadasWeight / tadasHeight ** 2;
// console.log(tadasKmi);

// let a = 8;
// let b = 6;
// let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c);

// let cel = 20;
// let far = (9 / 5) * cel + 32;
// console.log(far);

// let vardas = "Tautvydas";

// function hello(message) {
//   console.log(message);
// }

// hello(`Hello ${vardas}`);

// let vardas1 = "Tautvydas";
// let vardas2 = "Kiano";

// function hello(message1) {
//   console.log(message1);
// }

// hello(`Hello ${vardas1}`, `Hello ${vardas2}`);
// function maziausiasNumeris(a, b, c) {
//   let maziausias = Math.min(a, b, c);
//   console.log(`Mažiausias numeris: ${maziausias}`);
//   return maziausias;
// }
// let maziausias = maziausiasNumeris(10, 5, 8);
// console.log("Grąžintas mažiausias numeris:", maziausias);

// function augina(sk) {
//   console.log("Pradinis skaicius:", sk);
//   let padidintas = sk + 1;
//   return padidintas;
// }
// let pradSK = 5;
// let auginaSK = augina(pradSK);

// console.log("grazintas padidintas skaicius:", auginaSK);

// function skaiciuotiVidurkiu(pazymiai) {
//   if (!pazymiai) {
//     console.log("Nėra įvestų pažymių.");
//     return null;
//   }

//   let suma = pazymiai.reduce((total, pazymys) => total + pazymys, 0);
//   let vidurkis = suma / pazymiai.length;
//   return vidurkis;
// }

// let pazymiai = [5, 9, 7];
// let vidurkis = skaiciuotiVidurkiu(pazymiai);
// console.log("Grąžintas vidurkis:", vidurkis);

// function stipendija(vidurkis) {
//   if (vidurkis <= 8) {
//     console.log("Moksleivis gaus stipendiją.");
//   } else {
//     console.log("Gal tu dar eik apsimokyt.");
//   }
// }
// stipendija(vidurkis);

// function user() {
//   let impUser = prompt("kuo jus vardu:");
//   return impUser;
// }
// let userName = user();
// console.log("vardas:", userName);

function lygMetai(metai) {
  let lygMetai = metai % 2 === 0;
  // if (lygMetai) {
  //   console.log(`${metai} yra lyginiai`);
  // } else {
  //   console.log(`${metai} yra nelyginiai`);
  // }
  console.log(lygMetai ? `${metai} yra lyginiai` : `${metai} yra nelyginiai`);

  // lygMetai
  //   ? console.log(`${metai} yra lyginiai`)
  //   : console.log(`${metai} yra nelyginiai`);
  // // return;
}
lygMetai(2022);

// 1 uzduotis

function sum(sk1, sk2) {
  let suma = parseFloat(sk1) + parseFloat(sk2);
  return suma;
}
let sk1 = prompt(`Iveskite skaici sk1:...`);
let sk2 = prompt(`Iveskite skaiciu sk2:...`);
let ats = sum(sk1, sk2);
alert(`Skaiciu suma yra:... ${ats}`);

// 2uzduotis
function kvadratu(sk) {
  let kvadratas = parseFloat(sk) ** 2;
  return kvadratas;
}

let sk = prompt(`Iveskite skaiciu kuri norite pakelti kvadratu:...`);
let atsk = kvadratu(sk);
alert(`Nurodyta skaiciu pakele kvadratu gauname:..${atsk}`);

// 3 uzduotis
function teig(skaicius) {
  let teigiamas = parseFloat(skaicius) > 0;
  return teigiamas;
}

let skaicius = prompt(
  `Įveskite skaičių patikrinimui, ar jis teigiamas ar neigiamas`
);
alert(
  teig(skaicius)
    ? `${skaicius} yra teigiamas`
    : parseFloat(skaicius) === 0
    ? `${skaicius} yra nulis tai nei sioks nei toks`
    : `${skaicius} yra neigiamas`
);
// 4 uzduotis
function sak(zodis1, zodis2, zodis3) {
  let sakinys = `${zodis1}  ${zodis2}  ${zodis3}`;
  return sakinys;
}
let zodis1 = "Labas";
let zodis2 = "as";
let zodis3 = "krabas";
let finalas = sak(zodis1, zodis2, zodis3);
alert(`sudeja zodelius gauname nuostabu sakini:... ${finalas}`);
// 5 uzduotis
function lg(skaiciokas) {
  let lgn = skaiciokas % 2 === 0;
  console.log(
    lgn
      ? `${skaiciokas} yra lyginis skaicius`
      : `${skaiciokas} yra nelyginis skaicius`
  );
}

lg(5);
