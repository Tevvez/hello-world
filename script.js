// Numbers Input

let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');

// Operation Buttons

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');

// Result

let result = document.querySelector('.result');

plus.onclick = function(){

    result.innerHTML = Number(number1.value) + Number(number2.value);

}

minus.onclick = function(){

    result.innerHTML = Number(number1.value) - Number(number2.value);

}

multiply.onclick = function(){

    result.innerHTML = Number(number1.value) * Number(number2.value);

}

divide.onclick = function(){

    result.innerHTML = Number(number1.value) / Number(number2.value);

}