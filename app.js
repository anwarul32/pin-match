function getPin() {
    const pin = Math.round(Math.random() * 1000000)
    const pinString = pin + '';
    if(pinString.length ==6) {
        return pin;

    }
    else {
        // console.log('got 5 digit and calling again', pin);
        return getPin();

    }
}

function generatePin() {
    const pin = getPin();
   document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)) {
        if(number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumer = calcInput.value;
        const newNumber = previousNumer + number;
        calcInput.value = newNumber;
    }  
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');
    if(pin == typedNumbers) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}