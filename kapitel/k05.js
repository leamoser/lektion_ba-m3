document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- Hier lernst du die theoretischen Grundlagen des Kapitels --*/
    console.log('%cKapitel 05 - Manipulationen Teil 3', 'font-size: 20px; color: #eb8e96; text-decoration: underline');
    console.log('%cTHEORIE', 'font-size: 20px; margin:50px 0 0 0');

    /* ## SPLICE
            Die wohl mächtigste und koplizierteste Methode um Arrays zu manipulieren ist .splice()
            Eine Splice-Funtktion benötigt drei Parameter

            1. Index, an welchem gestartet wird -> (eine Zahl)
            2. Anzahl Elemente, die von diesem Index an gelöscht werden sollen -> (eine Zahl)
            3. Optional beliebig viele Elemente, die an dieser Index-Stelle eingefügt werden -> (beliebiger Datentyp)
            
            Ein Beispiel: */

    let menschen = ['Hans', 'Kim', 'Fiona', 'Henry'];
    menschen.splice(1, 2, 'Mia');
    console.log("Array 'menschen' nach splice(): ", menschen);

    /*      In diesem Beispiel wurde an Index-Position 1 begonnen (dort wo Kim steht).
            Von dieser Position an wurden dann 2 Items entfernt (also Kim und Fiona).
            Am Schluss wurde dann an dieser Position noch ein Item (Mia) hinzugefügt. 

            Mit der splice()-Methode lassen sich demnach sehr viele Dinge anstellen. */

    //Mehr Infos: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice




    /*================== ÜBUNGEN ==================*/
    /*-- Hier kannst du Übungen lösen --*/
    console.log('%cÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');

    //Lösche im Array 'meine_wg' Maik und Jane mit der splice()-Methode
    //Hinzugefügt wird niemand
    let meine_wg = ['Fiona', 'Nils', 'Maik', 'Jane'];

    console.log('meine_wg', meine_wg);
    //Füge dem Array 'andere_wg' mit der splice()-Methode zwei neue Mitbewohner hinzu
    //Die Namen der Mitbewohner sind Kevin und Nick
    //Die neuen Namen sollen nach Gina stehen
    let andere_wg = ['Gina', 'David', 'Milena'];

    console.log('andere_wg', andere_wg);



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
        "Der Array 'meine_wg' wurde korrekt bearbeitet",
        arraysEqual(meine_wg, ['Fiona', 'Nils'])
    );
    test(
        "Der Array 'andere_wg' wurde korrekt bearbeitet",
        arraysEqual(andere_wg, ['Gina', 'Kevin', 'Nick', 'David', 'Milena'])
    );



}, false);