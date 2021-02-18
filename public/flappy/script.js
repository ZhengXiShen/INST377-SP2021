

document.addEventListener('DOMContentLoaded', () =>{
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2

    function startGame(){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let timerId = setInterval(startGame, 20)

    function control(event) {
        if (event.keyCode === 32){
            jump()
        }
    }

    function jump (){
        if (birdBottom < 500) birdBottom += 50
        bird.style.bottom = birdBottom +'px'
        console.log(birdBottom)
    }
    document.addEventListener('keyup', control)

    function generateObstacle() {
        let obstacleLeft = 520
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.appendChild(obstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
    }
    generateObstacle()
})