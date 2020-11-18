function dalyba (dalinys, daliklis) {
    // input validation
if (typeof dalinys !== 'number') {
    console.error("Pirmoji įvesta reikšmė nėra skaičiaus tipo.");
    return false;
}
if (typeof daliklis !== 'number') {
    console.error("Antroji įvesta reikšmė nėra skaičiaus tipo.");
    return false;
}
if ("" + dalinys === "NaN" || dalinys === Infinity || dalinys === -Infinity) {
    console.error("Pirmoji įvesta reikšmė - ne normalus skaičius.")
    return false;
}
if ("" + daliklis === "NaN" || daliklis === Infinity || daliklis === - Infinity) {
    console.error("Antroji įvesta reikšmė - ne normalus skaičius.")
    return false;
}

    // function logic
    const power = 10 ** 2 /* 10 kvadradu, nes norime 2 skaitmwenų po kablelio, išsisaugoma reikšmė. */
    let dalmuo = (dalinys / daliklis) * power; /* padauginama iš 100, šiuo atveju, pagal išsaugotą reikšmę, kad dalmens reikšmės kablelis pasistumtų per 2 skaitmenis į dešinę. */
    dalmuo = Math.floor(dalmuo); /*funkcija, kuri gautą skaičių suapvalina žemyn. */
    dalmuo /= power;  /* suapvalintas skaičius grąžinamas į pirminę būseną padalinus jį iš power kintamojo - šiuo atveju iš 10^2, kad kablelis vėl pasistumtų per du skaitmenis atgal į kairę. */


    // post-logic validation
if (daliklis === 0) {
    console.error ("Antroji įvesta reikšmė yra netinkama. Dalyba iš nulio negalima.")
    return false;
}

    // return
    return dalmuo;
}

console.log(dalyba (NaN, 2));
console.log(dalyba (4, NaN));
console.log (dalyba (-Infinity, 2));
console.log (dalyba (4, -Infinity));
console.log (dalyba (Infinity, 2));
console.log (dalyba (4, Infinity));
console.log (dalyba ([], 2));
console.log (dalyba (4, []));
console.log (dalyba ('Toulouse', 2));
console.log (dalyba (4, 'Toulouse'));
console.log (dalyba (true, 2));
console.log (dalyba (4, true));
console.log ("-------------------------------------------");
console.log (dalyba (4, 2));
console.log (dalyba (4, 4));
console.log (dalyba (0, 2));
console.log (dalyba (4, 0));
console.log (dalyba (4, -2));
console.log (dalyba (-4, 2));
console.log (dalyba (-4, -2));
console.log (dalyba (4.1, 2));
console.log (dalyba (4, 2.1));
console.log (dalyba (4.1, 2.1));
