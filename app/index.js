import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement("button")
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = "Cick me and check the console"
    btn.onclick = printMe
    element.appendChild(btn)
    return element;
}

document.body.appendChild(component());