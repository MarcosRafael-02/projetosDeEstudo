const btnLeft = document.querySelector('#btnEsquerda')
const btnRight = document.querySelector('#btnDireita')
const carousel = document.querySelector(".carousel");
const secondContainer = document.querySelector(".second-container")


let currentX = 0
let step = 300

const limite = carousel.offsetWidth - carousel.scrollWidth

function moveLeft() {

    const novaPosicao = Math.max(currentX - step, limite)

    currentX = novaPosicao
    secondContainer.style.transform = `translateX(${currentX}px)`
}

function moveRight() {
    const targetX = Math.min(currentX + step, 0)

    currentX = targetX
    secondContainer.style.transform = `translateX(${currentX}px)`
}
