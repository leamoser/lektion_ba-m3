document.addEventListener('DOMContentLoaded', function () {
    //VARIABELN
    let container = document.querySelector('main');

    //WENN NÖTIG DEN DOM AUFBAUEN
    let buildElement = (elementname, content = '', attributes = {}) => {
        let element = document.createElement(elementname);
        element.innerHTML = content;
        Object.entries(attributes).forEach(attribute => {
            let [key, value] = attribute;
            element.setAttribute(key, value);
        })
        return element;
    }
    let buildDom = () => {
        container.appendChild(buildElement('h1', 'Kapitel 06 - Assoziative Arrays'));
        container.appendChild(buildElement('p', 'Löse die Übungen in der Datei kapitel/k06.js.'));
    }

    //INIT
    let init = () => {
        buildDom();
    }
    init();

}, false);