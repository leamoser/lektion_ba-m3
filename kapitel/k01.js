document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /*
    ## Um was es geht
            In dieser Unterrichtslektion lernst du einiges Über Arrays und Schleifen. 
            Variabeln kennst du ja schon. In einer Variable wurde bis anhin jeweils einfach 
            ein Wert gespeichert. Z.B.: */
    let name = 'Hans';
    let age = 23;
    /*      Ein Array gibt dir nun die Möglichkeit, mehrere Werte in einer Variabel zu speichern

    ## Anwendungsbeispiel
            Stell dir vor, du programmierst eine Anwendung in der es um WG's geht. In einer WG wohnen immer
            mehr als eine Person. Irgendwie willst du jeweils abspeichern, wer aktuell alles in der WG wohnt. 
            Genau dafür eignet sich ein Array, denn es lassen sich damit mehrer Werte, in diesem Fall Namen, in 
            einer Variabel speichern. 

    ## Syntax
            Ein Array wird folgendermassen aufgebaut. */
    let wg = ['Hans', 'Fiona', 'Severin', 'Maja'];
    /*      Die Eckigen klammern zeigen JavaScript dass es sich um einen Array handelt. 
            Die einzelnen Werte im Array werden per Komma abgetrennt. Es können in einem Array
            Strings, Nummern, Boolsche Werte, weitere Arrays, usw. abgespeichert werden. 
    */






    /*============= ÜBUNGEN =============*/
    /*-- Hier kannst du Übungen lösen --*/

    //Schreibe hier einen Array und speichere diesen in der schon definierten Variabel `meine_wg` ab.
    //Füge in den Array alle Menschen ein, mit welchen du zusammen wohnst.
    let meine_wg;

    //Gib hier den Array in der Konsole aus und schau dir die Ausgabe genau an





    /*============== KORREKTUR ==============*/
    /*-- bitte diesen Teil NICHT bearbeiten --*/
    console.log('%c-------⬇--------TESTS-------⬇--------', 'margin:100px 0 0 0')
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
        "Array 'meine_wg' wurde richtig definiert",
        Array.isArray(meine_wg)
    );


}, false);