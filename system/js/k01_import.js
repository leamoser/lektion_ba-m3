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
        container.appendChild(buildElement('h1', 'Kapitel 01 - Was ist ein Array?'));
        container.appendChild(buildElement('p', 'Löse die Übungen in der Datei kapitel/k01.js und halte die Konsole im Browser geöffnet.'));
    }

    //INIT
    let init = () => {
        buildDom();
    }
    init();

}, false);