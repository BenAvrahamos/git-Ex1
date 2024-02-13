'use strict'
function onBallClick(elBall) {
    var currSize = elBall.offsetWidth
    if (currSize > 350) currSize = 100
    const newSize = currSize + 50


    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'
    console.log(elBall.style.width);



}