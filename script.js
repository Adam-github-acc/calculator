let add = (a, b) => a + b;

let sub = (a, b) => a - b;

let times = (a, b) => a * b;

let divide = (a, b) => a / b;

let operate = (operator, a, b) => {
    a = parseInt(a)
    b = parseInt(b)
    if(operator == '+'){
        return add(a, b)
    }
    else if(operator =='-'){
        return sub(a, b)
    }
    else if(operator == '*'){
        return times(a, b)
    }
    else if(operator == '/'){
        return divide(a, b)
    }else return "wrong";
};
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
display.textContent = ''
});
let displayValue ='';
let buttonMaker = (num) =>{
    const button = document.querySelector(`.button${num}`);
    button.addEventListener('click', () => {
    displayValue = display.textContent += `${num}`;
    });
};
for(let i = 0; i < 10; i++){
    buttonMaker(i);
};

let sign;
let oldValue;
const buttonPlus = document.querySelector(`.buttonPlus`);
buttonPlus.addEventListener('click', () => {
oldValue = displayValue
sign = '+'
display.textContent = ''
});
const buttonSub = document.querySelector(`.buttonSub`);
buttonSub.addEventListener('click', () => {
oldValue = displayValue
sign = '-'
display.textContent = ''
});
const buttonTimes = document.querySelector(`.buttonTimes`);
buttonTimes.addEventListener('click', () => {
oldValue = displayValue
sign = '*'
display.textContent = ''
});
const buttonDivide = document.querySelector(`.buttonDivide`);
buttonDivide.addEventListener('click', () => {
oldValue = displayValue
sign = '/'
display.textContent = ''
});

const buttonEquals = document.querySelector(`.buttonEquals`);
buttonEquals.addEventListener('click', () => {
displayValue = display.textContent = operate(sign, oldValue, displayValue);
});