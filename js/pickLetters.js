function pickLetters(text, step){
// input validation
if (typeof text !== 'string') {
    return "Error: pirmoji reikšmė - ne teksto tipo.";
}
if (typeof step !== 'number') {
    return "Error: antroji reikšmė ne skaičiaus tipo.";
}
if (step % 1 !==0) {
    return "Error: žingsnis turi būti sveikasis skaičius."
}
const size = text.length;
if (text === "") {
    return "Error: tekstas nepateiktas."
}

if (step > size) {
    return "Error: žingsnis yra per didelis, lyginant su teksto ilgiu."
}
if (step === 0) {
    return "Error: žingsnis negali būti nulinis."
}
if (step !== Math.round(step)) {
    return "Error: žingsnis turi būti sveikasis skaičius."
}

// logic
let rez = "";
if (step > 0) {
    const firstLetterPosition = step - 1;
    for (let i= firstLetterPosition; i<size; i += step){ 
        rez += text [i];
    } 
} else {
        const firstLetterPosition = size + step;
        for ( let i = firstLetterPosition; i >= 0; i += step) {
            rez += text [i];
        }
    }
// post-logic validation

// return     
return rez;
}




console.log( pickLetters( 1561, 4 ), "->", "Pirmasis kintamasis yra netinkamo tipo.");
console.log (pickLetters ("1561", "2"));
console.log( pickLetters( "abc", 0 ), "->", "Antrasis kintamasis turi būti didesnis už nulį." );
console.log( pickLetters( "abc", 4 ), "->", "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį." );
console.log( pickLetters( "abcdefg", 2 ), "->", "bdf");
console.log( pickLetters( "abcdefghijkl", 3 ), "->", "cfil" );
console.log( pickLetters( "abcdefghijkl", 1.5 ), "->", "Error");
console.log( pickLetters( "abcdefghijkl", -3), "->", "jgda" );
console.log( pickLetters( "", 3), "->", "Error: tekstas nepateiktas." );