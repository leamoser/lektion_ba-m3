document.addEventListener('DOMContentLoaded', function () {

    console.log('%cKapitel 06 - Assoziative Arrays', 'font-size: 20px; color: #eb8e96; text-decoration: underline');
    console.log('%cTHEORIE', 'font-size: 20px; margin:50px 0 0 0');

    //KAPITEL 6 - ASSOZIATIVE ARRAYS========================================================================

    /*============= THEORIE und BEISPIELE =============*/
    /*-- Hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /* ## ASSOZIATIVE ARRAYS
        ### Intro
            Das Konzept von Assoziativen Arrays ist extrem wichtig. In JavaScript wird es eher selten angewandt, 
            in anderen Programmiersprachen (bspw. PHP) jedoch sehr oft.

        ### Erklärung
            Normalerweise werden Arrays mit Nummern, beginnend bei 0 indexiert. Das macht Sinn, 
            wenn gleiche Elemente in einem Array gespeichert werden (z.B. WG-Mitbewhoner*innen)
            Wenn jedoch unterschiedliche Elemente in einem Array gespeichert werden sollen, dann 
            macht die Indexierung nach Nummern nicht mehr viel Sinn. 

        ##Beispiel
            Wenn man zum Beispiel Angaben zu einer Person (Name, Alter und Motivation) in einem Array speichern möchte,
            ist eine Nummerirung nicht sinnvoll. Es würde mehr Sinn machen, wenn anstatt Nummern stehen würde,
            was abgespeichert ist. Das geht mit assoziativen Arrays. Und zwar so: */

    let mensch = [];
    mensch['name'] = 'Lea';
    mensch['age'] = 23;
    mensch['is_motivated'] = true;
    console.log("Array 'mensch':", mensch);

    /*      Mit der Erstellung eines Assoziativen Arrays wurde nun eine Form gefunden, verschiedenartige
            Werte logisch zu speichern. Schaue dir das Ergebnis in der Kosole an. 

    ## WERTE AUSLESEN
            Aus einem "normalen" Array mit Nummern-Indexierung wird folgendemassen ein Array-Element ausgelesen:
            array[1];
            Bei assoziativen Arrays funktioniert das fast gleich, es muss anstatt der Nummer einfach 
            die mitgegebene Bezeichnung verwendet werden */

    console.log("age:", mensch['age']);

    /*      Es gibt auch eine alternative Methode, die geht folgendermassen: */

    console.log("age:", mensch.age);

    /* ## ASSOZIATIVE ARRAYS MANIPULIEREN
            Wie auch "normale" Arrays können auch assoziative Arrays manipuliert werden.
            Folgende Beispiele zeigen wie: */

    //Wert ändern
    mensch['is_motivated'] = false;
    console.log("Nach geändertem Wert:", mensch);
    //Wert hinzufügen
    mensch['favourite_color'] = 'yellow';
    console.log("Nach hinzugefügtem Wert:", mensch);
    //Wert löschen
    delete mensch['age'];
    console.log("Nach gelöschtem Wert:", mensch);




    /*============= ÜBUNGEN =============*/
    /*-- Hier kannst du Übungen lösen --*/
    console.log('%cÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');

    // Erstelle einen assoziativen Array zu deiner Person (name des Arrays = me_myself_and_i) mit folgenden Werten
    //1. name = string
    //2. likes_coding = boolean (true or false)
    //3. shoesize = number
    let me_myself_and_i;

    console.log('me_myself_and_i:', me_myself_and_i);
    //Speichere in der Variabel 'my_shoesize' die Schuhgrösse aus dem Array ab
    let my_shoesize;

    console.log('my_shoesize;', my_shoesize);




    /*============== KORREKTUR ==============*/
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
        "Der Array 'me_myself_and_i' wurde korrekt erstellt",
        Array.isArray(me_myself_and_i)
    );
    test(
        "Die Schuhgrösse wurde richtig ausgegeben",
        typeof my_shoesize === 'number'
    );


}, false);