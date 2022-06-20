let add = (a, b) => a + b;

let sub = (a, b) => a - b;

let times = (a, b) => a * b;

let divide = (a, b) => a / b;

// 6 think
// 7 parsefloat? addeventlistener
// css
//9 remove using slice(-1)
//10 numbers done

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
        if(b == 0) return "NOPE!";
        return divide(a, b)
    }else return "wrong";
};
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const body = document.querySelector('body')
clear.addEventListener('click', () => {
display.textContent = '';
oldValue = 0;
displayValue = 0;
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
let operatorAlready = () =>{
    if(sign == '+'){
        displayValue = operate(sign, oldValue, displayValue);
        display.textContent = displayValue
    }
    else if(sign == '-'){
       return displayValue = display.textContent = operate(sign, oldValue, displayValue);
    }
    else if(sign == '*'){
       return displayValue = display.textContent = operate(sign, oldValue, displayValue);
    }
    else if(sign == '/'){
       return displayValue = display.textContent = operate(sign, oldValue, displayValue);
    }

}
let sign;
let oldValue;
const buttonPlus = document.querySelector(`.buttonPlus`);
buttonPlus.addEventListener('click', () => {
operatorAlready();
oldValue = displayValue;
sign = '+';
display.textContent = '';
});
const buttonSub = document.querySelector(`.buttonSub`);
buttonSub.addEventListener('click', () => {
operatorAlready();
oldValue = displayValue;
sign = '-';
display.textContent = '';
});
const buttonTimes = document.querySelector(`.buttonTimes`);
buttonTimes.addEventListener('click', () => {
operatorAlready();
oldValue = displayValue;
sign = '*';
display.textContent = '';
});
const buttonDivide = document.querySelector(`.buttonDivide`);
buttonDivide.addEventListener('click', () => {
operatorAlready();
oldValue = displayValue;
sign = '/';
display.textContent = '';
});

const buttonEquals = document.querySelector(`.buttonEquals`);
buttonEquals.addEventListener('click', () => {
display.textContent = operate(sign, oldValue, displayValue);
});

let buttonClicker = (num) =>{
body.addEventListener('keyup', e =>{
const button = document.querySelector(`.button${num}`);
if(e.key == `${num}`){
button.click();
};
});
};
for(let i = 0; i < 10; i++){
    buttonClicker(i);
};
const del = document.querySelector('.del');
del.addEventListener('click', () => {
return display.textContent = display.textContent.slice(0, -1);
});
const change = document.querySelector('.change')
change.addEventListener('click', () => {
displayValue = display.textContent = parseInt((display.textContent) * -1)
});