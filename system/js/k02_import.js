document.addEventListener('DOMContentLoaded', function () {
    //VARIABELN
    let container = document.querySelector('main');

    //WENN NÖTIG DEN DOM AUFBAUEN
    let buildElement = (elementname, content) => {
        let element = document.createElement(elementname);
        element.innerHTML = content;
        return element;
    }
    let buildDom = () => {
        container.appendChild(buildElement('h1', 'Kapitel 02 - Indexierung'));
        container.appendChild(buildElement('p', 'Löse die Übungen in der Datei kapitel/k02.js'));
    }

    //INIT
    let init = () => {
        buildDom();
    }
    init();

}, false);