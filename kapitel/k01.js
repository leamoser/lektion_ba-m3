document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- Hier lernst du die theoretischen Grundlagen des Kapitels --*/
    console.log('%cTHEORIE', 'font-size: 20px');
    console.log('Keine Konsolen-Ausgaben in der Theorie.')

    /* ## UM WAS ES GEHT
            In dieser Unterrichtslektion lernst du alles über Arrays und Schleifen. Bevor das Thema
            Schleifen angegangen wird, kümmern wir uns um Arrays. 
            
            Variabeln kennst du ja schon, sie werden entweder per let oder mit const initialisiert.
            In einer Variable wurde bis anhin jeweils einfach ein Wert gespeichert. 
            Z.B.: */

    let name = 'Hans';
    let age = 23;

    /*      Ein Array gibt dir nun die Möglichkeit, mehrere Werte in einer Variabel zu speichern.

    ## ANWENDUNGSBEISPIEL
            Stell dir vor, du programmierst eine Anwendung in der es um WG's geht. In einer WG wohnen immer
            mehrere Personen. Irgendwie willst du jeweils abspeichern, wer aktuell alles in der WG wohnt. 
            Genau dafür eignet sich ein Array, denn es lassen sich damit mehrer Werte, in diesem Fall Namen, in 
            einer Variabel speichern. 

    ## SYNTAX
            Ein Array wird folgendermassen aufgebaut. */

    let wg = ['Hans', 'Fiona', 'Severin', 'Maja'];

    /*      Die Eckigen klammern zeigen JavaScript, dass es sich um einen Array handelt. 
            Die einzelnen Werte im Array werden per Komma abgetrennt. Es können in einem Array
            Strings, Nummern, Boolsche Werte, weitere Arrays, usw. abgespeichert werden. */




    /*================== ÜBUNGEN ==================*/
    /*-- Hier kannst du Übungen lösen --*/
    console.log('%cÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');

    //Schreibe hier einen Array und speichere diesen in der schon definierten Variabel `meine_wg` ab.
    //Füge in den Array alle Menschen ein, mit welchen du zusammen wohnst.
    let meine_wg;

    //Gib hier den Array in der Konsole aus und schau dir die Ausgabe genau an.




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
        "Array 'meine_wg' wurde richtig definiert",
        Array.isArray(meine_wg)
    );

}, false);