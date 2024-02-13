'use strict'
function onBallClick(elBall) {
    const currSize = elBall.offsetWidth
    const newSize = elBall.offsetWidth + 50


    elBall.style.width = newSize +'px'
    elBall.style.height = newSize + 'px'

}