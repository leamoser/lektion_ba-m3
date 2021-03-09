/*================== LÖSUNGEN ==================*/
//In die Datei kapitel/k04.js kopieren, um zu testen.

let meine_wg = ['Fiona', 'Nils', 'Maik', 'Jane'];

document.querySelector('#add').addEventListener('click', function () {
    meine_wg.push('Neuling');
    console.log('Item hinzugefügt. Array neu: ', meine_wg);
})

document.querySelector('#remove').addEventListener('click', function () {
    meine_wg.pop();
    console.log('Item entfernt. Array neu: ', meine_wg);
})