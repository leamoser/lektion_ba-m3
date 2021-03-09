/*================== LÖSUNGEN ==================*/
//In die Datei kapitel/k10.js kopieren, um zu testen.

let numbers = [3, 11, 40, 909, 12, 23, 3];
let selected_values = [];
numbers.forEach(function (number) {
    if (number >= 10 && number <= 100) {
        selected_values.push(number);
    }
})
console.log("Array 'selected_values'; ", selected_values);