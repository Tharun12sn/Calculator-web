function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}

function appendNumber(number) {
    document.getElementById('calculator-screen').value += number;
}

function calculate() {
    const screen = document.getElementById('calculator-screen');
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}