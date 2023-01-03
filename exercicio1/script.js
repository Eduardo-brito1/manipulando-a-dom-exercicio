const body = document.querySelector('body');
const img = document.querySelector('img');

let position = 0;
let imageIndex = 1;

const myInterval = setInterval(() => {

    if (position <= body.offsetWidth - 490) {
        img.style.left = `${position}px`

        if (imageIndex > 8) {
            imageIndex = 1;
        }

        img.src = `./assets/${imageIndex}.png`;

        position += 45;
        imageIndex++;

        return;
    }

    clearInterval(myInterval);

}, 100);
