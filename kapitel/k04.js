document.addEventListener('DOMContentLoaded', function () {

        console.log('%cKapitel 04 - Manipulationen Teil 2', 'font-size: 20px; color: #eb8e96; text-decoration: underline');
        console.log('%cTHEORIE', 'font-size: 20px; margin:50px 0 0 0');

        //KAPITEL 4 - MANIPULATIONEN TEIL 2========================================================================

        /*============= THEORIE und BEISPIELE =============*/
        /*-- Hier lernst du die theoretischen Grundlagen des Kapitels --*/

        /* ## WERTE HINZUFÜGEN
                Um einem Array Werte hinzuzufügen wurde in Kapitel 3 schon eine Methode vorgestellt. 
                Es gibt jedoch oft den Fall, dass man nicht weiss wie viele Items ein Array hat.
                Dann weiss man nicht, an welcher Index-Position ein neuer Wert angefügt werden muss. 
                Es gibt eingebaute Array-Methoden in JavaScript, die Werte am Schluss des Arrays oder
                am Anfang des Arrays anfügen. */

        let menschen = ['Hans', 'Kim', 'Fiona', 'Henry'];
        menschen.push('James');
        console.log("Array 'menschen' nach push(): ", menschen)


        /*      Mit .push() wird ein Wert am ENDE angefügt (Beispiel oben). 
                Mit der Methode .unshift() wird am ANFANG ein Wert angefügt (Beispiel unten). */

        menschen.unshift('Kai');
        console.log("Array 'menschen' nach unshift(): ", menschen)

        /* ## WERTE ENTFERNEN
                Ähnlich wie Werte angefügt werden können, können auch Werte entfernt werden. 
                Mit .pop() wird der LETZTE Wert entfernt. 
                Mit .shift() wird der ERSTE Wert entfernt. 
                Der entfernte Wert kann in einer Variabel ausgegeben werden. */

        let am_ende_entfernt = menschen.pop();
        console.log("Mit pop() entfernte Person: ", am_ende_entfernt);
        console.log("Array 'menschen' nach pop()", menschen);

        /*      Exakt gleich geht das Ganze mit shift(). */

        let am_anfang_entfernt = menschen.shift();
        console.log("Mit shift() entfernte Person: ", am_anfang_entfernt);
        console.log("Array 'menschen' nach shift()", menschen);




        /*================== ÜBUNGEN ==================*/
        /*-- Hier kannst du Übungen lösen --*/

        //Du hast nachfolgend den Array 'meine_wg'.
        //Die zwei Buttons sind schon mit Event-Listenern versehen.

        //1. Mache, dass wenn der Button 'Item hinzufügen' gedrückt wird,
        //immer der Name 'Neuling' hinzugefügt wird (Zeile 59)

        //2. Und wenn der Button 'Item entfernen' gedrückt wird, 
        //soll das letzte Item wieder entfernt werden (Zeile 65)

        let meine_wg = ['Fiona', 'Nils', 'Maik', 'Jane'];

        //Button 'Item hinzufügen'
        document.querySelector('#add').addEventListener('click', function () {

                console.log('Item hinzugefügt. Array neu: ', meine_wg);
        })

        //Button 'Item entfernen'
        document.querySelector('#remove').addEventListener('click', function () {

                console.log('Item entfernt. Array neu: ', meine_wg);
        })




        /*================ KORREKTUR ================*/
        /*-- bitte diesen Teil NICHT bearbeiten --*/
        console.log('%cKONTROLLE DER ÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');
        console.log('Diese Übung wird nicht automatisch korrigiert. Bitte wende dich bei Problemen an die Tutor*innen oder die Dozierenden.')
        /* 
        ## ANMERKUNG
                Diese Übung wird nicht automatisch korrigiert.
                Bitte wende dich bei Problemen an die Tutor*innen oder die Dozierenden.
        */
        console.log('%cÜBUNGEN', 'font-size: 20px; margin:50px 0 0 0');

}, false);