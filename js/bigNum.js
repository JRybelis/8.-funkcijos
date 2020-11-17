function bigNum (list) {
    // input validation
    if (typeof list !== 'object') {
        return "Netinkamas tipas.";
    }

    const size = list.length;

    if (size === 0) {
        return 'Sąrašas yra tuščias.'
    }
// logic
    let biggestNumber = -Infinity;
    for (let i=0; i < size; i++) {
        const num = list [i];
    // console.log(num);
    /* sąrašo elemento validacija */
        if (typeof num !== 'number') {
            continue; /* ciklas ignoruos ne skaičių ir toliau tęs iteraciją. */
        }
    /* logika */

    if (num > biggestNumber) {
        biggestNumber = num;
       }
    }

// post-logic validation
    if ( biggestNumber === -Infinity) {
        return "Sąraše nerastas nė vienas normalus skaičius."
    }
// return
    return biggestNumber;
}

// Tes1ai

function sum(a, b) { /* demo funkcija, skirta testams sudaryti */
    return a + b}

console.log(bigNum(sum));
console.log(bigNum([sum]));
console.log(bigNum({}));
console.log(bigNum([{}, {}, {}]));
console.log( bigNum( [ 1 ] ), "->", 1);
console.log( bigNum( [ 1, 2, 3 ] ), "->", 3 );
console.log( bigNum( [ -5, 78, 14, 0, 18 ] ), "->", 78 );
console.log( bigNum(  [6, 69, 69, 69, 66 ] ), "->", 69 );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), "->", -1);
console.log( bigNum( `pomidoras` ) );
console.log( bigNum( [] ));
console.log( bigNum( true ));
console.log( bigNum( false ));
console.log( bigNum( 585));
console.log( bigNum(  [1, 2, 3, 2, 1, 'labas' ] ), "->", 3 );
console.log( bigNum(  [1, 2, 3, 'labas', 2, 1, ] ), "->", 3 );
console.log( bigNum(  ['labas', 1, 2, 3, 2, 1, ] ), "->", 3 );
console.log( bigNum(  ['labas', NaN, -Infinity, ] ), "->", 3 );

