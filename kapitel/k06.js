document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /*
    ## ASSOZIATIVE ARRAYS
        ### Intro
            Das konzept von Assoziativen Arrays ist extrem wichtig. In JavaScript
            wird es weniger angewandt, in anderen Programmiersprachen (bspw. PHP) jedoch sehr oft.
        ### Erklärung
            Normalerweise werden Arrays mit Nummern, beginnend bei 0 indexiert. Das macht Sinn, 
            wenn gleiche Elemente in einem Array gespeichert werden (z.B. WG-Mitbewhoner*innen)
            Wenn jedoch unterschiedliche Elemente in einem Array gespeichert werden sollen, dann 
            macht die Indexierung nach Nummern nicht mehr viel Sinn. 
        ##Beispiel
            Wenn man zum Beispiel Angaben zu einer Person (name, alter und motivation) in einem Array speichern möchte,
            ist die Nummerirung nicht sinvoll. Es würde mehr Sinn machen, wenn anstat Nummern stehen würde,
            was abgespeichert ist. So geht das: 
    */
    let mensch = [];
    mensch['name'] = 'Lea';
    mensch['age'] = 23;
    mensch['is_motivated'] = true;
    console.log(mensch);
    /*
            Mit der Erstellung eines Assoziativen Arrays wurde nun eine Form gefunden, verschiedenartige
            Werte logisch zu speichern. 

    ## WERTE AUSLESEN
            Aus einem "normalen" Array mit Nummern-Indexierung wird folgendemassen ein Array-Element ausgelesen:
            array[1];
            Bei assoziativen Arrays funktioniert das fast gleich, es muss anstatt der Nummer einfach 
            die mitgegebene Bezeichnung verwendet werden
    */
    console.log(mensch['age']);
    /*
            Es gibt auch eine alternative Methode, die geht folgendermassen:
    */
    console.log(mensch.age);
    /*
    ## ASSOZIATIVE ARRAYS MANIPULIEREN
            Wie auch "normale" Arrays können auch assoziative Arrays manipuliert werden.
            Folgende Beispiele zeigen wie:
    */

    //Wert ändern
    mensch['is_motivated'] = false;
    console.log(mensch);
    //Wert hinzufügen
    mensch['favourite_color'] = 'yellow';
    console.log(mensch);
    //Wert löschen
    delete mensch['age'];
    console.log(mensch);






    /*============= ÜBUNGEN =============*/
    /*-- Hier kannst du Übungen lösen --*/

    // Erstelle einen assoziativen Array zu deiner Person (name des Arrays = me_myself_and_i) mit folgenden Parametern
    //1. name = string
    //2. likes_coding = boolean (true or false)
    //3. shoesize = number
    let me_myself_and_i;


    //Speichere in der Variabel 'my_shoesize' die Schuhgrösse aus dem Array ab
    let my_shoesize;





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
        "Der Array 'me_myself_and_i' wurde korrekt erstellt",
        Array.isArray(me_myself_and_i)
    );
    test(
        "Die Schuhgrösse wurde richtig ausgegeben",
        typeof my_shoesize === 'number'
    );


}, false);