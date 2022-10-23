let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'X', '/'];

//1.Connect screen to js
const out = document.querySelector('.calc-screen p')

//2.After press button AC clear all everything
document.querySelector('.ac').addEventListener('click', () => {
    a = '';
    b = '';
    sign = '';
    out.textContent = 0;

})

//3.conect buttons 

document.querySelector('.buttons').addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return
        // out.textContent = ''

    //4.Create key for every button
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        } else if (b !== '' && a !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;


        } else {
            b += key;
            out.textContent = b;
        }
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
    }
    console.log(a, b, sign)

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                a = a / b;
                break;
            case '+':
                a = (+a) + (+b)
                break;
        }
        out.textContent = a;
        finish = true;
    }

})




