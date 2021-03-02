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
        container.appendChild(buildElement('h1', 'Kapitel 04 - Manipulationen Teil 2'));
        container.appendChild(buildElement('p', 'Löse die Übungen in der Datei kapitel/k04.js. Die zwei Button brauchst du für die Übungen.<br><br>'));
        container.appendChild(buildElement('button', 'Item entfernen', { 'id': 'remove' }));
        container.appendChild(buildElement('br'))
        container.appendChild(buildElement('button', 'Item hinzufügen', { 'id': 'add' }));
    }

    //INIT
    let init = () => {
        buildDom();
    }
    init();

}, false);