let a = '' // first number
let b = '' // second number
let sign = '' // operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

const action = ['-', '+', 'x', '/'];

//Screen

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; //first number and result
    b = '' //second number;
    sign = ''; // operation sign
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
        //didn't press on button
        if (!event.target.classList.contains('btn')) return;
        // press on clear all ac
        if (event.target.classList.contains('ac')) return

        out.textContent = '';
        // button pressed is displayed

        const key = event.target.textContent;
