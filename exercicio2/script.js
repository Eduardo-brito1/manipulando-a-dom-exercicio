const redBox = document.querySelector('.red');
const blueBox = document.querySelector('.blue');
const purpleBox = document.querySelector('.purple');
const orangeBox = document.querySelector('.orange');

const buttonRandom = document.querySelector('button');
const h2Result = document.querySelector('h2');

let currentOption = '';

function unmarkSelectedBoxes() {
    redBox.classList.remove('selected');
    blueBox.classList.remove('selected');
    purpleBox.classList.remove('selected');
    orangeBox.classList.remove('selected');
}

function resetGame() {
    setTimeout(() => {
        h2Result.textContent = '';
        unmarkSelectedBoxes();
        currentOption = '';
    }, 1000);
}

redBox.onclick = () => {
    currentOption = 'red';

    unmarkSelectedBoxes();
    redBox.classList.add('selected');
}

blueBox.onclick = () => {
    currentOption = 'blue';

    unmarkSelectedBoxes();
    blueBox.classList.add('selected');
}

purpleBox.onclick = () => {
    currentOption = 'purple';

    unmarkSelectedBoxes();
    purpleBox.classList.add('selected');
}

orangeBox.onclick = () => {
    currentOption = 'orange';

    unmarkSelectedBoxes();
    orangeBox.classList.add('selected');
}

buttonRandom.onclick = () => {
    const colorOptions = ['red', 'blue', 'purple', 'orange'];

    if (currentOption === '') {
        h2Result.textContent = 'Selecione uma cor para sortear!';
        return;
    }

    const aleatoryPosition = Math.floor(Math.random() * 4);

    const randomColor = colorOptions[aleatoryPosition];

    if (currentOption !== randomColor) {
        h2Result.textContent = 'Tente Novamente.';
        resetGame();
        return;
    }

    h2Result.textContent = 'Parabéns, você acertou!'
    resetGame();
}