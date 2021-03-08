document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/
    console.log('%cTHEORIE', 'font-size: 20px');

    /* ## INTRO - SCHLEIFEN UND ARRAYS
            Über Arrays weisst du mittlerweilen ziemlich viel. Jetzt kommen die Schleifen dazu. 
            Diese zwei Themengebiete passen sehr gut zusammen, da Schlaufen dazu da sind, 
            Dinge wiederholend zu machen. 
    
    ## FOR-SCHLEIFEN
            Wie Arrays und Schleifen zusammengehören, soll im Verlaufe der Lektion klar werden. 
            Zuerst ist aber wichtig zu vestehen, was eine For-Schleife ist. 
            For-Schleifen, oder Schleifen im generellen, sind fast das wichtigste Programmier-Konzept, 
            dass es zu verstehen gibt. 

            Eine For-Schlaufe führt eine definierte Anzahl mal etwas aus. Die Syntax ist wie folgt:

            for([startwert]; [endwert]; [dazwischen]){
                [was x mal passieren soll]
            }

            Startwert: Hier wird definiert, wo angefangen wird zu zählen
            Endwert: Hier wird definiert, bis wann die Schleife laufen soll
            Dazwischen: Hier wird definiert, was jedes mal nach der Schleife passieren soll

            Ein Beispiel für eine For-Schleife ist folgendes. Sieh dir den Output in der Konsole an. */

    for (let i = 0; i < 5; i++) {
        console.log('Durchlauf: ', i);
    }

    /*      In diesem Beispiel wird bei 0 begonnen zu zählen. 
            Solange die Zahl kleiner als 5 ist, läuft die Schleife.
            Jedes mal nach der Schlaufe erhöht sich i um 1. 
            Aufgrund dieser Angaben, läuft die Schleife genau 5 Mal ab. 

            Ohne Schlaufe müsste, um den selben Output zu erreichen, fünf mal 
            ein console.log()-Befehl geschrieben werden. Schlaufen versuchen das zu vereinfachen
            und schneller zu machen.
    
    ## FOR-SCHLAUFEN UND ARRAYS
            Diese For-Schleifen können nun auch genutzt werden, um durch Arrays zu iterieren. 
            Sprich: Für jeden Wert eines Arrays etwas auszuführen. Ein Beispiel: */

    let menschen = ['Hans', 'Kim', 'Fiona'];
    for (let i = 0; i < menschen.length; i++) {
        console.log('In meiner WG wohnt', menschen[i]);
    }

    /*      Es kann so Content in den DOM gegeben werden */

    let container = document.querySelector('#wgliste');
    for (let i = 0; i < menschen.length; i++) {
        let element = document.createElement('p');
        element.innerHTML = menschen[i];
        container.appendChild(element);
    }

    /*      Schleifen werden in den Meisten fällen so gebraucht. Nun kann nämlich einfach ein neuer 
            Wert in den Array gegeben werden, und schon wird auch im DOM ein neuer Name ausgegeben. */



    /*================== ÜBUNGEN ==================*/
    /*-- Hier kannst du Übungen lösen --*/
    console.log('%cÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');

    // Im Array Numbers sind einige Zahlen drin. 
    //Gib jede Zahl einmal in der Konsole aus
    let numbers = [21, 44, 109, 1, 209, 56, -2, 18];


    //Das ist eine eher Schwierige Übung, kombiniere hier dein Wissen über Arrays, Bedingungen und Schlaufen
    //Hints: if/else, push(), for -> Dinge die du brauchen wirst
    //Du hast den Array 'number' von oben. Plus hast du einen schon definierten neuen Array der heisst 'small_numbers'
    //Befülle diesen Array mit allen Zahlen aus dem Array 'numbers', die kleiner als 22 sind. 

    let small_numbers = [];
    //Hier dazwischen schreiben
    console.log("Array 'small_numbers: ", small_numbers);



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
        "Der Array 'small_numbers' wurde korrekt befüllt",
        arraysEqual(small_numbers, [21, 1, -2, 18])
    );


}, false);