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

            this.dom.style.left = (window.utils.pxToSvw(window.innerWidth) / 2 - this.sizeSquare) + 'svw'
            this.dom.style.top = (window.utils.pxToSvw(window.innerHeight) / 2 - this.sizeSquare) + 'svw'
            this.decalX = (window.utils.pxToSvw(window.innerWidth) / 2 - this.sizeSquare - ((window.utils.pxToSvw(window.innerWidth) / 2 - this.sizeSquare) % this.sizeSquare)) / this.sizeSquare
            this.decalY = (window.utils.pxToSvw(window.innerHeight) / 2 - this.sizeSquare - ((window.utils.pxToSvw(window.innerHeight) / 2 - this.sizeSquare) % this.sizeSquare)) / this.sizeSquare
            // console.log(this.decalY, this.decalX)
            this.checkingClosestSquares = false


            this.zPressed = false
            this.qPressed = false
            this.sPressed = false
            this.dPressed = false

            this.speed = 10
            this.moveGap = 0.4

            document.addEventListener('keydown', e => {
                // console.log(e)
                this.keyDown(e)
            })
            document.addEventListener('keyup', e => {
                // console.log(e)
                this.keyUp(e)
            })

            //test d'utils
            // console.log(153)
            // console.log(utils.pxToSvw(153))
            // console.log(utils.svwToPx(utils.pxToSvw(153)))
        }
        getAllDivCloseToPlayer() {
            // console.log('function start')
            if (!this.checkingClosestSquares) {
                this.checkingClosestSquares = true
                let top = Number(carte.map.style.top.replace('svw', '')) / this.sizeSquare
                let left = Number(carte.map.style.left.replace('svw', '')) / this.sizeSquare
                let decalTop = (top - (top % this.sizeSquare) - this.decalY)
                let decalLeft = (left - (left % this.sizeSquare) - this.decalX)
                let indexTop = ((decalTop - carte.grid.length) + carte.grid.length) * -1
                let indexLeft = ((decalLeft - carte.grid.length) + carte.grid.length) * -1
                let arr = []
                for (let x = indexLeft - 6; x < indexLeft + 6; x++) {
                    if (carte.grid[x] == null) continue
                    for (let y = indexTop - 6; y < indexTop + 6; y++) {
                        // console.log(x, y)
                        if (carte.grid[x][y] == null) continue
                        if (carte.grid[x][y] == '') continue
                        arr.push(carte.grid[x][y])


                    }
                }
                // console.log('finito')
                this.checkingClosestSquares = false
                // console.log(arr.length)
                return arr
            }
        }
        checkIfPlayerCanMove(arr, addX, addY) {
            if (arr == null) return

            let p = this.dom.getBoundingClientRect()
            addX = utils.svwToPx(addX)
            addY = utils.svwToPx(addY)

            for (let i = 0; i < arr.length; i++) {
                let d = arr[i].getBoundingClientRect()
                if (
                    p.x < d.x + d.width + addX &&
                    p.x + p.width > d.x + addX &&
                    p.y < d.y + d.height + addY &&
                    p.height + p.y > d.y + addY
                ) {
                    // console.log('colision')
                    return true
                }
            }
            return false
        }
        keyDown(e) {
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
        }
        keyUp(e) {
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
        }
        zMove() {
            // if (this.sPressed) return
            if (this.checkIfPlayerCanMove(this.getAllDivCloseToPlayer(), 0, this.moveGap)) return
            window.carte.map.style.top = (Number(window.carte.map.style.top.replace('svw', '')) + this.moveGap) + 'svw'
            setTimeout(() => {
                if (this.zPressed) {
                    this.zMove()
                }
            }, this.speed)
        }
        sMove() {
            // if (this.zPressed) return
            if (this.checkIfPlayerCanMove(this.getAllDivCloseToPlayer(), 0, -this.moveGap)) return
            window.carte.map.style.top = (Number(window.carte.map.style.top.replace('svw', '')) - this.moveGap) + 'svw'
            setTimeout(() => {
                if (this.sPressed) {
                    this.sMove()
                }
            }, this.speed)
        }
        qMove() {
            // if (this.dPressed) return
            if (this.checkIfPlayerCanMove(this.getAllDivCloseToPlayer(), this.moveGap, 0)) return
            window.carte.map.style.left = (Number(window.carte.map.style.left.replace('svw', '')) + this.moveGap) + 'svw'
            setTimeout(() => {
                if (this.qPressed) {
                    this.qMove()
                }
            }, this.speed)
        }
        dMove() {
            // if (this.qPressed) return
            if (this.checkIfPlayerCanMove(this.getAllDivCloseToPlayer(), -this.moveGap, 0)) return
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