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
    else if(operator == '/'){
        return times(a, b)
    }
    else if(operator == '*'){
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

const buttonEquals = document.querySelector(`.buttonEquals`);
buttonEquals.addEventListener('click', () => {
display.textContent = operate(sign, oldValue, displayValue);
});