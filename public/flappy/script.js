

document.addEventListener('DOMContentLoaded', () =>{
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false

    function startGame(){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let gameTimerId = setInterval(startGame, 20)

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
        let obstacleLeft = 508
        let randomHeight = Math.random() * 80
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.appendChild(obstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'

        function moveObstacle() {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -58) {
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
            }
            if (
                obstacleLeft > 202 && obstacleLeft < 282 && birdLeft === 222 ||
                birdBottom === 0
                ) {
                gameOver()
            }
        }
        let timerId = setInterval(moveObstacle, 20)
        setTimeout(generateObstacle, 2500)
    }
    generateObstacle()


    function gameOver (){
        clearInterval(gameTimerId)
        isGameOver = true
        document.removeEventListener('keyup', control)
    }
})