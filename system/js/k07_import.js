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
        container.appendChild(buildElement('h1', 'Kapitel 07 - For-Schleife'));
        container.appendChild(buildElement('p', 'Löse die Übungen in der Datei kapitel/k07.js. Die Liste der WG wird für ein Beispiel gebraucht.'));
        container.appendChild(buildElement('br'));
        container.appendChild(buildElement('div', 'Meine WG besteht aus: ', { 'id': 'wgliste' }));
    }

    //INIT
    let init = () => {
        buildDom();
    }
    init();

}, false);