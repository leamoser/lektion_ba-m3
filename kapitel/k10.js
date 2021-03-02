document.addEventListener('DOMContentLoaded', function () {

    /*============= THEORIE und BEISPIELE =============*/
    /*-- hier lernst du die theoretischen Grundlagen des Kapitels --*/

    /*
    ## FOREACH()
            Die Technik entwickelt sich immer weiter. Auch Programmiersprachen entwickeln sich
            rasant, auch JavaScript. Deshlab mag das jetzt vielleicht etwas fustrierend sein, 
            aber vor allem die For-Schlaufe wurde mit dem neuesten JavaScript-Update ziemilch fest
            von einer einfacheren Funktion ersetzt. 
            Der forEach()-Schlaufe. 

            Diese Schlaufe kann (fast) das selbe die die klassische For-Schlaufe aus Kapitel 7. 
            Doch sie ist um einiges einfacher. Die Syntax sieht folgendermassen aus:
            
            let array = [];
            array.forEach(function(arrayitem){
                console.log(arrayitem);
            })

            Und so einfach kann mittels dieser Schlaufe durch einen Array iteriert werden. 
            Probiere in den Übungen selber aus, eine solche forEach()-Schleife anzuwenden. 
    */



    /*============= ÜBUNGEN =============*/
    /*-- Hier kannst du Übungen lösen --*/

    // Du hast den vorgegebenen Array 'numbers'
    // 1. Schreibe eine forEach()-Schleife nach Vorbild der oben abgebildeten Syntax.
    // 2. Ergänze die Schlaufe nun so, dass alle Werte zwischen 10 und 100 in einen neuen Array
    // mit dem Namen 'selected_values'. Nutze dafür dein Wissen über Array-Manipulationen,
    // Bedingungen und Schleifen
    let numbers = [3, 11, 40, 909, 12, 23, 3];
    let selected_values = [];
    // Hier den Array schreiben;

    console.log("Array 'selected_values'; ", selected_values);



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
        "Die korrekte Zahl wurde in 'first_negative_number' ausgegeben",
        arraysEqual(selected_values, [11, 40, 12, 23])
    );


}, false);