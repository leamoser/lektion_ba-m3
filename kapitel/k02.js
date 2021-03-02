document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /*
    ## Indexierung
            Im vorherigen Kapitel hast du dir als letztes einen Array in der Konsole ausgegeben 
            und genau angeschaut. 
            In der Konsole ist nochmals ein Array ausgegeben. 
    */
    const menschen = ['Hans', 'Kim', 'Fiona', 'Henry'];
    console.log(menschen);
    /*
            Wenn du dir den ansiehst, siehst du dass die einzelnen Items im Array durchnummeriert sind. 
            Die Nummerierung fängt jeweils bei 0 an. Das ist typisch für Arrays und IMMER so.
            Der Nummer, die einem Array zugeweisen ist sagt man auch Index. 

    ## LÄNGE AUSLESEN
            Eine weitere wichtige Grundlage im Thema Arrays ist es, zu wissen wie man rausfindet
            wie lange ein Array ist. Sprich wie viele Items darin abgespeichert sind. 
            Das geht wie folgt: 
    */
    console.log('Anzahl Items im Array; ', menschen.length);





    /*============= ÜBUNGEN =============*/
    /*-- Hier kannst du Übungen lösen --*/

    // Welche Index-Nummer hat die Zahl 21 in diesem Array?
    //Schreibe die Antwort als Wert in die Variabel 'index'
    const numbers = [1, 44, 0, 21, 3];
    let index;

    //Gib in der Variabel 'items' die Länge des Arrays aus
    let items;






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
        "Die Indexierung von Arrays wurde verstanden",
        index === (1836 / 612)
    );
    test(
        "Die Länge vom Array 'numbers' wurde ausgelesen",
        items === 5
    );


}, false);