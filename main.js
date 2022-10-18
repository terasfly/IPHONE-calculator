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
     console.log(key)

    //if pressed key 0-9 or .
    // jei paspausta knopke neyuri b nieko ir sign neturi nieko
    // tada a+= kaskart paspaudus prisideda skaiciusjj
    //2. paspaudus b antra skaiciu b tuscias ir sign jau uzpildytas pvz + 
    //nesuveiks o suveiks  2 blokas
    //  } else {
    //     b += key;
    //     out.textContent = a;
    // }
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.log(a, b, sign);
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;

        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;

    }
    //if pressed sign button
    //paspaudus sign suveiks sis if
    if (action.includes(key)) {
        sign += key;
        out.textContent = sign;
        console.log(a, b, sign);
        return
    }

    //press =

    if (key === '=') {
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'fail';
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign)
    }




}
