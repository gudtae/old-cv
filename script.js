let out = document.querySelector('.out');
let display = document.querySelector('.display');
let letter = document.querySelectorAll('.letter');
let operator = document.querySelector('.operator');
const equal = document.querySelector('.equal');
const plus = document.querySelector('.plus');
const del = document.querySelector('.del');

let num2 = '';
let num1 = '';
let result = '';

letter.forEach(item => {
    out.innerText = '';
    display.innerText = '';
    item.addEventListener('click', (e) => {
        num2 += e.target.innerText;
        out.innerText += e.target.innerText;
    })

})

plus.addEventListener('click', (e) => {
    if (!out) return;
    if (num1 && num2) {
        concat();
    } else result = num2;
    clearVar();
});

function clearVar() {
    num1 = num2 + ' ' + '+';
    display.innerText = num1;
    num2 = '';
    out.innerText = '';
};

function concat() {
    num2 = num2.replace(/^./, num2 => num2.toUpperCase());
    result = result + num2;
}

equal.addEventListener('click', () => {
    if (!num1 || !num2) return;
    concat();
    clearVar();
    out.innerText = result;
    num2 = result;
    num1 = '';
})


del.addEventListener('click', () => {
    num2 = num2.slice(0, -1);
    out.innerText = num2;
})