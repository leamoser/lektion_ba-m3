document.addEventListener('DOMContentLoaded', function () {

    console.log('%cKapitel 08 - While-Schleife', 'font-size: 20px; color: #eb8e96; text-decoration: underline');
    console.log('%cTHEORIE', 'font-size: 20px; margin:50px 0 0 0');

    //KAPITEL 8 - WHILE-SCHLEIFE===========================================================================

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /* ## WHILE-SCHLEIFE
            Die zweite Schleife, die in JavScript wichtig ist, ist die while-Schleife.
            Eine While-Schleife führt etwas aus, solange eine Bedingung wahr ist. 
            Daher auch der Name => does something WHILE condition is true.
            
            ACHTUNG: Wenn sie falsch angewandt wird, kann der Browser crashen. 
            Das passiert, wenn eine Bedingung nie false wird und die Schleife endlos läuft.
            Falls das passiert, musst du den Browser schliessen und neu öffnen.

            Die Syntax einer While-Schleife sieht folgendermassen aus: 
            while([bedingung]){
                [was passieren soll, während die bedingung wahr ist]
            }

            Mit einer While-Schleife kann grundsätzlich das selbe gemacht werden, 
            wie mit einer For-Schleife. Dieses Beispiel zeigt das: */

    let i = 0;
    while (i < 5) {
        console.log('Durchlauf: ', i);
        i++;
    }

    /*      Auch hier wird der Code in der Schleife genau 5 mal ausgeführt. 
            Gebraucht wird die While-Schleife aber selten für diesen Zweck, da ja die
            For-Schleife genau das schon erfüllt. 

    ## USECASE
            Ein üblicher Use-Case ist die Nutzung zum durchsuchen eines Arrays. Sprich: 
            Wenn man NICHT weiss, wieviel mal iteriert werden muss, kann ein While-Loop genutzt werden. */

    let menschen = ['Hans', 'Kim', 'Fiona', 'Henry'];
    let f = 0;
    while (menschen[f] !== 'Fiona') {
        f++;
    }
    console.log('Array-Index von Fiona: ', f);

    /*      Mit einem While-Loop konnte hier herausgefunden werden, 
            an welcher Stelle im Array sich Fiona befindet.
            Es musste daher nicht durch den gesamten Array iteriert werden. Bei kleinen Arrays
            ist das auch nicht schlimm, doch wenn viele Daten darin wären, 
            würde sich das in der Ladezeit niederschlagen. */




    /*================== ÜBUNGEN ==================*/
    /*-- Hier kannst du Übungen lösen --*/
    console.log('%cÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');

    // Im Array 'numbers' sind einige Zahlen drin. 
    // Finde mittels While-Schleife heraus, an welcher Stelle die erste Zahl liegt,
    // die unter 0 ist. Speichere das Ergebnis in der Variabel 'first_negative_number' ab.
    //  WICHTIG: Benutze NICHT die variabel i, sondern die schon vorgeschriebene Variabel i
    let numbers = [9, 31, 2, -1, 209, 56, -2, 18];
    let e = 0;
    //Hier schreiben

    let first_negative_number;
    console.log('first_negative_number: ', first_negative_number);




    /*================ KORREKTUR ================*/
    /*-- bitte diesen Teil NICHT bearbeiten --*/
    console.log('%cKONTROLLE DER ÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');
    function test(test_name, expr) {
        let status;
        if (expr) {
            status = "KORREKT ✅";
        } else {
            status = "NOCH NICHT KORREKT ❌";
        }
        console.log(`${test_name}: ${status}`);
    }
    test(
        "Die korrekte Zahl wurde in 'first_negative_number' ausgegeben",
        first_negative_number === -1
    );


}, false);