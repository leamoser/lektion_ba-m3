/*================== LÖSUNGEN ==================*/
//In die Datei kapitel/k08.js kopieren, um zu testen.

let numbers = [9, 31, 2, -1, 209, 56, -2, 18];
let e = 0;
while (numbers[e] > 0) {
    e++;
}
let first_negative_number = numbers[e];
console.log('first_negative_number: ', first_negative_number);