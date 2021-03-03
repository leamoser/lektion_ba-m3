document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /*
    ## INTRO - SCHLAUFEN UND ARRAYS
        Im vorherigen Kapitel waren Arrays das Thema. Jetzt geht es um Schlaufen. 
            Diese zwei Themengebiete passen sehr gut zusammen, da Schlaufen dazu da sind, 
            Dinge wiederholend zu machen. 
    
    ## FOR-SCHLAUFE
            Wie Arrays und Schlaufen zusammengehören, soll im verlaufe der Lektion klar werden. 
            Zuerst ist aber wichtig zu vestehen, was eine For-Schlaufe ist. 
            For-Schleifen, oder Schleifen im generellen, sind fast das wichtigste Programmier-Konzept, 
            dass es zu verstehen gibt. 

            Eine For-Schlaufe führt eine definierte Anzahl mal etwas aus. Die Syntax ist wie folgt: 
            for([startwert]; [endwert]; [dazwischen]){
                [was x mal passieren soll]
            }
            Startwert: Hier wird definiert, wo angefangen wird zu zählen
            Endwert: Hier wird definiert, bis wann die Schleife laufen soll
            Dazwischen: Hier wird definiert, was jedes mal nach der Schlaufe passieren soll

            Ein Beispiel für eine For-Schlaufe ist folgendes. Sieh dir den Output in der Konsole an.
    */
    for (let i = 0; i < 5; i++) {
        console.log('Durchlauf 1: ', i);
    }
    /*
            In diesem Beispiel wird bei 0 begonnen zu zählen. 
            Solange, wie die Zahl kleiner als 5 ist läuft die Schleife.
            Und jedes mal nach der Schlaufe erhöht sich i um 1. 
            Aufgrund dieser Angaben, läuft die Schleife genau 5 Mal ab. 

            Ohne Schlaufe müsste, um den selben Output zu erreichen, fünf mal 
            ein console.log()-Befehl geschrieben werden. Schlaufen versuchen das zu vereinfachen
            und schneller zu machen.
    
    ## FOR-SCHLAUFEN UND ARRAYS
            Diese For-Schleifen können nun auch genutzt werden, um durch Arrays zu iterieren. Sprich: 
            Für jeden Wert eines Arrays etwas auszuführen. 
            Ein Beispiel: 
     */
    let menschen = ['Hans', 'Kim', 'Fiona'];
    for (let i = 0; i < menschen.length; i++) {
        console.log('In meiner WG wohnt', menschen[i]);
    }
    /*
            Es kann so Content in den DOM gegeben werden
    */
    let container = document.querySelector('#wgliste');
    for (let i = 0; i < menschen.length; i++) {
        let element = document.createElement('p');
        element.innerHTML = menschen[i];
        container.appendChild(element);
    }
    /*
            Schleifen werden in den Meisten fällen so gebraucht. Nun kann nämlich einfach ein neuer 
            Wert in den Array gegeben werden, und schon wird auch im DOM ein neuer Name ausgegeben. 
    */



    /*============= ÜBUNGEN =============*/
    /*-- Hier kannst du Übungen lösen --*/

    // Im Array Numbers sind einige Zahlen drin. 
    //Gib jede Zahl einmal in der Konsole aus
    let numbers = [21, 44, 109, 1, 209, 56, -2, 18];


    //Das ist eine eher Schwierige Übung, kobiniere hier dein wissen von Arrays, Bedingungen und Schlaufen
    //Hints: if/else, push(), for -> Dinge die du brauchen wirst
    //Du hast den Array 'number' von oben. Plus hast du einen schon definierten neuen Array der heisst 'small_numbers'
    //Befülle diesen Array mit allen Zahlen aus dem Array 'numbers', die kleiner als 22 sind. 

    let small_numbers = [];
    //Hier schreiben
    console.log("Array 'small_numbers: ", small_numbers);



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
        "Der Array 'small_numbers' wurde korrekt befüllt",
        arraysEqual(small_numbers, [21, 1, -2, 18])
    );


}, false);