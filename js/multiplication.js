function daugyba (daugiklis, daugmuo) { 
    // input validation:
    // jeigu daugiklis nėra skaičius, tai rodom klaidą:
    if (typeof daugiklis !== 'number') {
        console.log (`Error: pirmoji įvesta reikšmė nėra skaičiaus tipo.`)
        return false;
    }
    if ("" + daugiklis === "NaN") {
        console.error(`Error: pirmoji reikšmė - ne normalus skaičius`);
        return false;
    }
    // jeigu b nėra skaičius, tai rodom klaidą:
    if (typeof daugmuo !== 'number') {
        console.log('Error: antroji įvesta reikšmė nėra skaičiaus tipo.')
        return false;
    }
    if (isNaN (daugmuo)) {
        console.error(`Error: atroji reikšmė - ne normalus skaičius`);
        return false;
    }
    // function logic
    const sandauga = daugiklis * daugmuo;
    // function result
    return sandauga;

}
console.log (daugyba (2, Infinity));
console.log (daugyba (2, NaN));
console.log (daugyba ('dayum', 2));
console.log (daugyba (2, 'lol'));
console.log (daugyba (2, 3.14));
console.log (daugyba (2, 2));
console.log (daugyba (2, "2b"));
console.log (daugyba (2, 222));

