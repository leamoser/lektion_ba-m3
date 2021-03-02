document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /*
    ## WHILE-SCHLEIFE
            Die zweite Schleife die in JavScript wichtig ist, ist die While-Schleife.
            Eine While-Schlaufe führt etwas aus, solange eine bedingung wahr ist. 
            Daher auch der Name => does something WHILE condition is true
            
            ACHTUNG: Wenn sie falsch angewandt wird, kann der Browser crashen. 
            Das passiert, wenn eine Bedingung nie false wird und die Schlaufe endlos läuft.

            Die Syntax einer While-Schlaufe sieht folgendermassen aus: 
            while([bedingung]){
                [was passieren soll, wenn die bedingung wahr ist]
            }

            Mit einer While-Schlaufe kann grundsätzlich das selbe gemacht werden 
            wie mit einer For-Schlaufe. Dieses Beispiel zeigt das: 
    */
    let i = 0;
    while (i < 5) {
        console.log('Durchlauf 1: ', i);
        i++;
    }
    /*
            Auch hier wird der Code in der Schleife genau 5 mal ausgeführt. 
            Gebraucht wird die While-Schlaufe aber selten für diesen Zweck, da ja die
            For-Schlaufe genau das schon erfüllt. 

    ## USECASE
            Ein üblicher Use-Case ist die Nutzung zum durchsuchen eines Arrays. Sprich: 
            Wenn man NICHT weiss, wieviel mal iteriert werden muss, kann ein While-Loop genutzt werden. 
    */
    let menschen = ['Hans', 'Kim', 'Fiona', 'Henry'];
    let f = 0;
    while (menschen[f] !== 'Fiona') {
        console.log('Durchlauf: ', f);
        f++;
    }
    console.log('Array-Index von Fiona: ', f);
    /* 
            Mit einem While-Loop konnte hier herausgefunden werden, 
            an welcher Stelle im Array sich Fiona befindet.
            Es musste daher nicht durch den gesamten Array iteriert werden. Bei kleinen Arrays
            ist das auch nicht schlimm, doch wenn viele Daten darin wären, 
            würde sich das in der Ladezeit niederschlagen. 
    */




    /*============= ÜBUNGEN =============*/
    /*-- Hier kannst du Übungen lösen --*/

    // Im Array 'numbers' sind einige Zahlen drin. 
    // Finde mittels While-Schlaufe heraus, an welcher Stelle die erste Zahl liegt,
    // die unter 0 ist. Speichere das Ergebnis in der Variabel 'first_negative_number' ab.
    //  WICHTIG: Benutze NICHT die variabel i, sondern die schon vorgeschriebene Variabel i
    let numbers = [9, 31, 2, -1, 209, 56, -2, 18];
    let e = 0;
    //Hier schreiben

    let first_negative_number;
    console.log('Erste Nummer kleiner als 0: ', first_negative_number);




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
        first_negative_number === -1
    );


}, false);