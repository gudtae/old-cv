let out = document.querySelector('.out');
let num = document.querySelectorAll('.numbers');
let oper = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');

let haveDot = false;
let display = '';
let num1 = '';
let num2 = '';
let result = null;
let lastoperation = '';

num.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot){
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot){
            return;
        }
        num2 += e.target.innerText;
        out.innerText += e.target.innerText;
    })
})

oper.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!out) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (num1 && num2 && lastoperation){
            mathOperation();
        } else {
            result = parseFloat(num2);
        }
        clearVar();
        lastoperation = operationName;
        
    })
});

function clearVar(){
    num1 = num2;
    num2 = '';
    out.innerText = '';
};

function mathOperation(){
    if (lastoperation == '*'){
        result = parseFloat(result) * parseFloat(num2);
    } else if (lastoperation == '-'){
        result = parseFloat(result) - parseFloat(num2);
    } else if (lastoperation == '+'){
        result = parseFloat(result) + parseFloat(num2);
    } else if (lastoperation == '/'){
        result = parseFloat(result) / parseFloat(num2);
    } else if (lastoperation == '%'){
        result = parseFloat(result) % parseFloat(num2);
    }

};

equal.addEventListener('click', () => {
    if (!num2 || !num1) return;
    haveDot = false;
    mathOperation();
    clearVar();
    out.innerText = result;
    num2 = result;
    num1 = "";
  });

clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    out.innerText = '';
    result = ''
})