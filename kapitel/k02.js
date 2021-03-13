document.addEventListener('DOMContentLoaded', function () {

    console.log('%cKapitel 02 - Indexierung', 'font-size: 20px; color: #eb8e96; text-decoration: underline');
    console.log('%cTHEORIE', 'font-size: 20px; margin:50px 0 0 0');

    //KAPITEL 2 - INDEXIERUNG==================================================================================

    /*============= THEORIE und BEISPIELE =============*/
    /*-- Hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /* ## INDEXIERUNG
            Im vorherigen Kapitel hast du dir als letztes einen Array in der Konsole ausgegeben 
            und genau angeschaut. Unten wird der Array 'menschen' in der Konsole ausgegeben.
            Sieh dir den Output in der Kosole nochmals genau an. */

    const menschen = ['Hans', 'Kim', 'Fiona', 'Henry'];
    console.log('Array "menschen":', menschen);

    /*      Wenn du dir den ansiehst, siehst du dass die einzelnen Items im Array durchnummeriert sind. 
            Die Nummerierung fängt jeweils bei 0 an. Das ist typisch für Arrays und IMMER so.
            Der Nummer, die einem Array-Item zugeweisen ist, sagt man auch Index. Dieses Konzept wird im
            Verlaufe der Lektion noch wichtig.

    ## LÄNGE AUSLESEN
            Eine weitere wichtige Grundlage im Thema Arrays ist, zu wissen wie man rausfindet
            wie viele Items in einem Array abgespeichert sind.  
            Das geht wie folgt: */

    console.log('Anzahl Items im Array "menschen": ', menschen.length);




    /*================== ÜBUNGEN ==================*/
    /*-- Hier kannst du Übungen lösen --*/
    console.log('%cÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');

    // Welche Index-Nummer hat die Zahl 21 in diesem Array?
    //Schreibe die Antwort als Wert in die Variabel 'index'
    const numbers = [1, 44, 0, 21, 3, -2, 11, 15, 98, 109, 22, 33, 10, 21];
    let index;
    console.log('index:', index)

    //Gib in der Variabel 'items' die Länge des Arrays 'numbers' aus
    let items;
    console.log('items:', items);




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
        "Die Indexierung von Arrays wurde verstanden",
        index === (1836 / 612)
    );
    test(
        "Die Länge vom Array 'numbers' wurde ausgelesen",
        items === (9128 / 652)
    );


}, false);