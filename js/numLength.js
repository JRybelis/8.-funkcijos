function numLength (skaičius) {
    // input validation
    // let skaitmenųKiekis = 0;
    if (typeof skaičius !== 'number') {
        console.log("Pateikta netinkamo tipo reikšmė."); 
    }
    if ("" + skaičius === 'NaN') { /*konvertuojame skaičius į tekstą */
        return "Pateikta netinkamo tipo reikšmė."; 
    }
    if (skaičius === Infinity) {
        return "Pateikta netinkamo tipo reikšmė.";
    }
// function logic
    const textSkaičius = "" + skaičius; /* konvertavimas į string */
    let size = textSkaičius.length;
    
    if (skaičius < 0) {
        console.log ('radau minusą');
        size--;
    }
    if (skaičius % 1 !== 0) {
        size--;
    }
// return
    return size;
}
// Testai: 

console.log(numLength(true));
console.log(numLength('asdf'));
console.log(numLength(NaN));
console.log(numLength(Infinity));
console.log(numLength([]));
console.log(numLength([5]));
console.log(numLength([5, 88]));

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37060123456), '->', 11);
console.log(numLength(4e7), '->', 8);
console.log(numLength(3, 1415), '->', 1);
console.log(numLength(-5), '->', 1);
console.log(numLength(-3, 1415), '->', 1);
console.log(numLength(2.2), '->', 2);
console.log(numLength(3.1415), '->', 5);
console.log(numLength(-3.1415), '->', 5);

console.log('-------');
// console.log(numLength(15456465465464541513548463468486846564643846876465164984644846654643546484684.), '->', 77);
// console.log(numLength(0.00000000000000000000000000000000000000000000000000002), '->', 54);