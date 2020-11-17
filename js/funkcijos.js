const pirmas1 = 22;
const antras1 = -5;
const suma1 = pirmas1 + antras1;
console.log (`${pirmas1} + ${antras1} = ${suma1}`);

const pirmas2 = 122;
const antras2 = 5;
const suma2 = pirmas2 + antras2;
console.log (`${pirmas2} + ${antras2} = ${suma2}`);

const pirmas3 = 32;
const antras3 = 45;
const suma3 = pirmas3 + antras3;
console.log (`${pirmas3} + ${antras3} = ${suma3}`);

const pirmas4 = 42;
const antras4 = 1;
const suma4 = pirmas4 + antras4;
console.log (`${pirmas4} + ${antras4} = ${suma4}`);

console.log ('___________________________________________________________________');

// function pavadinimas (sąlyga skliaustuose. kintamieji skiriami per kablelį) {funkcijos logika}
function sumavimas (pirmas, antras){ /* su dviem kintamaisiais*/
    const suma = pirmas + antras;
    console.log (`${pirmas} + ${antras} = ${suma}`);
}
sumavimas (22, -5);
sumavimas (122, 5);
sumavimas (32, 45);
sumavimas (42, 1);

console.log ('___________________________________________________________________');

/* su daugiau kintamųjų ir jų kiekis keičiasi (array) */
function pazymiu_vidurkis(list){
    // console.log(list);
    const kiekis = list.length;
    let suma = 0;
    
    for (let i = 0; i < kiekis; i++) {
        const pazymys = list[i];
        suma = suma + pazymys;
    }

    const vidurkis = suma / kiekis;
    
    if (kiekis === 0) {
        console.log('Neturi pažymių');
    } else {
        console.log (`Vidurkis ${vidurkis}.`);
    }
}

pazymiu_vidurkis ([5, 9, 8]);
pazymiu_vidurkis ([5, 9, 8, 7]);
pazymiu_vidurkis ([]);
pazymiu_vidurkis ([10, 9, 10, 10, 10, 10, 10, 2]);


// funkcija, kurios pagalba duotas skaičius keliamas kvadratu. 2 => 4, etc.

function kvadratu (num) {
    const rez = num * num;
    console.log(`${num} kvadratu: ${rez}.`)
    return rez;
}
const duKv = kvadratu (2); /* daug kartų kartojamai operacijai. vieną kartą skaičiuoja, išsaugo ir perpanaudoja rezultatą, priskyrus jį kintamajam. */
kvadratu (2);
kvadratu (3);
kvadratu (4);
kvadratu (-4);
kvadratu (9);


// Funkcija, kurios pagalba duotas skaičius pakeliamas atitinkamu laipsniu. 2^3 = 8, etc. 
function laipsnis (base, power) {
    // const answer = base ** power; /* arba return Math.pow(base, power);*/
    let answer = 1; /* daugyboje reik kaupiančiojo operatoriaus 1 */
    for (let i = 0; i < power; i++) {
        answer = answer * base;
    }
    return answer
}
const kubas = laipsnis (2, 3); /* priskyrimas + testas */
console.log(kubas, `->`, 8);

const du10 = laipsnis (2, 10);
console.log (du10, `->`, 1024);

