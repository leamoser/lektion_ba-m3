document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- Hier lernst du die theoretischen Grundlagen des Kapitels --*/
    console.log('%cTHEORIE', 'font-size: 20px');

    /* ## WERTE AUSLESEN
            Bis jetzt wurde gelernt, wie der gesamte Array ausgegeben werden kann. 
            Doch aus Arrays lassen sich auch einzelne Werte auslesen. Dafür ist es wichtig zu wissen,
            dass die Indexierung, IMMER bei 0 beginnt. Einen einzelnen Wert liest man so aus: */

    let menschen = ['Hans', 'Kim', 'Fiona', 'Henry'];
    console.log(menschen[1]);

    /* ## WERT ÄNDERN
            Mit einer ähnlichen Methode lassen sich auch Werte im Array ändern. 
            Im folgenden Array wird der Wert mit dem Index 1 ersetzt. */

    console.log("Array 'menschen' vorher; ", menschen)
    menschen[1] = 'Janine';
    console.log("Array 'menschen' nachher; ", menschen);

    /* ## WERT ANHÄNGEN
            Auch Werte angehängt werden können mit dieser Methoden. */

    menschen[4] = 'Michael';
    console.log("Array 'menschen' mit einer Person mehr: ", menschen);




    /*================== ÜBUNGEN ==================*/
    /*-- Hier kannst du Übungen lösen --*/
    console.log('%cÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');

    // Nehme folgende Änderungen in diesem Array vor
    //1. Ändere 'Maik' zu 'James'
    //2. Füge zuerst 'Joe' und dann 'Lena' hinzu
    let meine_wg = ['Fiona', 'Nils', 'Maik', 'Jane'];


    console.log('meine_wg:', meine_wg);

    //Lese den Array-Wert von James aus und speichere ihn in der Variabel 'neuer_mitbewohner' ab
    let neuer_mitbewohner;




    /*================ KORREKTUR ================*/
    /*-- bitte diesen Teil NICHT bearbeiten --*/
    console.log('%cKONTROLLE DER ÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');
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
            status = "KORREKT ✅";
        } else {
            status = "NOCH NICHT KORREKT ❌";
        }
        console.log(`${test_name}: ${status}`);
    }
    test(
        "Der Array 'meine_wg' wurde richtig ergänzt",
        arraysEqual(meine_wg, ['Fiona', 'Nils', 'James', 'Jane', 'Joe', 'Lena'])
    );
    test(
        "Dein 'neuer_mitbewohner' wurde richtig ausgegeben",
        neuer_mitbewohner === 'James'
    );


}, false);