document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /*
    ## METHRSTUFIGE ARRAYS
            Arrays haben wir ja schon kennengelernt. Dort wurden jeweils Werte in einem Array gespeichert,
            meistens Strings oder Nummern. Nun lassen sich in einem Array aber auch weitere Arrays speichern.
            Das nennt man dann mehrstufige Arrays. 
    */
    let wg_stock_1 = ['Kim', 'Finn', 'Claudia'];
    let wg_stock_2 = ['Fiona', 'Samuel', 'Michael', 'Simone'];
    let haus = [wg_stock_1, wg_stock_2];
    console.log(haus);
    /* 
            Um jetzt beispielswese den Namen von Samuel auszugeben, kann nicht mehr einfach die 
            Indexnummer (1) von Samuel benutzt werden. Die Einzelnen WG's ja in einem Haus sind, muss zuerst 
            der richtige Stock gesucht werden, und dann die richtige Person.
            haus[index_der_wg][index_des_name];
    */
    console.log('haus[1][1]: ', haus[1][1]);
    /*
    ## FOR-SCHLAUFE DURCH MEHRSTUFIGE ARRAYS
            Wie stellt man das nun an, um aus einem mehrstufigen Array alle Personen einmal auszugeben?
            Das geht auch mit einer For-Schlaufe, diese muss jedoch auch mehrstufig sein.
    */
    for (let i = 0; i < haus.length; i++) {
        for (let x = 0; x < haus[i].length; x++) {
            console.log('Hausbewohner*in: ', haus[i][x]);
        }
    }
    /*
            Diese Methode sieht ziemlich kompliziert aus, ist aber eigentlich ziemlich simpel.
            Es werden einfach zwei For-Schlaufen verschachtelt. 
    */



    /*============= ÜBUNGEN =============*/
    /*-- Hier kannst du Übungen lösen --*/

    // Gib in der Variabel 'searched_number' die Zahl 209 aus.
    // Und natürlich nicht, indem du einfach 209 hinschreibst ;) 
    let numbers = [[9, 31, 2, -1, 209, 56], [-2, 18]];
    let searched_number;
    console.log('searched_number: ', searched_number);




    /*============== KORREKTUR ==============*/
    /*-- bitte diesen Teil NICHT bearbeiten --*/
    console.log('%c-------⬇--------TESTS-------⬇--------', 'margin:100px 0 0 0');
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;

        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }

        return true;
    }
    function test(test_name, expr) {
        let status;
        if (expr) {
            status = "PASSED";
        } else {
            status = "FAILED";
        }
        console.log(`${test_name}: ${status}`);
    }
    test(
        "Die korrekte Zahl wurde in 'first_negative_number' ausgegeben",
        searched_number === 209
    );


}, false);