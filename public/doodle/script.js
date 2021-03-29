document.addEventListener('DOMContentLoaded', () => {
    const grid  = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = flase
    let paltformCount = 5

    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerLeftBottom + 'px'
    }

    class Platform {
        constructor(newPlatBottom){
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)

        }
    }

    function createPlatforms() {
        for (let i = 0; i < paltformCount; i++){
            let platformSpace = 600 / paltformCount
            let newPlatBottom = 100 + i * paltformCount
            let newPlatform = new Platform ()
        }
    }

    function start() {
        if (!isGameOver) {
            createDoodler()
            createPlatforms()
        }
    }
    start() 

})