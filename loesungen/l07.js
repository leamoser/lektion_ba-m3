/*================== LÖSUNGEN ==================*/
//In die Datei kapitel/k07.js kopieren, um zu testen.

let numbers = [21, 44, 109, 1, 209, 56, -2, 18];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let small_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 22) {
        small_numbers.push(numbers[i]);
    }
}
console.log("Array 'small_numbers: ", small_numbers);