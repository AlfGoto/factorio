document.addEventListener('DOMContentLoaded', () => {
    // console.log(window.carte)

    class playerClass {
        constructor() {
            this.dom = document.createElement('div')
            this.dom.id = 'perso'
            document.body.appendChild(this.dom)

            this.sizeSquare = window.carte.sizeSquare

            this.dom.style.height = this.sizeSquare + 'svw'
            this.dom.style.width = this.sizeSquare + 'svw'

            this.dom.style.left = '45svw'
            this.dom.style.top = '30svw'


            this.zPressed = false
            this.qPressed = false
            this.sPressed = false
            this.dPressed = false

            this.speed = 10
            this.moveGap = 0.4

            document.addEventListener('keydown', e => {
                // console.log(e)
                switch (e.keyCode) {
                    case 90:
                        if (!this.zPressed) {
                            this.zPressed = true
                            this.zMove()
                        }
                        break
                    case 68:
                        if (!this.dPressed) {
                            this.dPressed = true
                            this.dMove()
                        }
                        break
                    case 81:
                        if (!this.qPressed) {
                            this.qPressed = true
                            this.qMove()
                        }
                        break
                    case 83:
                        if (!this.sPressed) {
                            this.sPressed = true
                            this.sMove()
                        }
                        break
                }
            })
            document.addEventListener('keyup', e => {
                // console.log(e)
                switch (e.keyCode) {
                    case 90:
                        this.zPressed = false
                        break
                    case 68:
                        this.dPressed = false
                        break
                    case 81:
                        this.qPressed = false
                        break
                    case 83:
                        this.sPressed = false
                        break
                }
            })
        }
        zMove() {
            if (this.sPressed) return
            window.carte.map.style.top = (Number(window.carte.map.style.top.replace('svw', '')) + this.moveGap) + 'svw'
            setTimeout(() => {
                if (this.zPressed) {
                    this.zMove()
                }
            }, this.speed)
        }
        sMove() {
            if (this.zPressed) return
            window.carte.map.style.top = (Number(window.carte.map.style.top.replace('svw', '')) - this.moveGap) + 'svw'
            setTimeout(() => {
                if (this.sPressed) {
                    this.sMove()
                }
            }, this.speed)
        }
        qMove() {
            if (this.dPressed) return
            window.carte.map.style.left = (Number(window.carte.map.style.left.replace('svw', '')) + this.moveGap) + 'svw'
            setTimeout(() => {
                if (this.qPressed) {
                    this.qMove()
                }
            }, this.speed)
        }
        dMove() {
            if (this.qPressed) return
            window.carte.map.style.left = (Number(window.carte.map.style.left.replace('svw', '')) - this.moveGap) + 'svw'
            setTimeout(() => {
                if (this.dPressed) {
                    this.dMove()
                }
            }, this.speed)
        }
    }

    window.player = new playerClass()
})