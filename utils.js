document.addEventListener('DOMContentLoaded', () => {
    class utilsClass {
        constructor() {
            window.addEventListener('mousemove', e => {
                this.mouseY = e.clientY
                this.mouseX = e.clientX
            })
        }
        pxToSvw(arg) { return arg / (window.innerWidth / 100) }
        svwToPx(arg) { return arg * (window.innerWidth / 100) }
        getXYOfMapFromClick() {
            let y = this.moduloSquare(Math.abs(carte.map.style.top.replace('svw', '')) + this.pxToSvw(this.mouseY)) / carte.sizeSquare
            let x = this.moduloSquare(Math.abs(carte.map.style.left.replace('svw', '')) + this.pxToSvw(this.mouseX)) / carte.sizeSquare
            return {x:x,y:y}
        }
        moduloSquare(arg) {
            return arg - (arg % carte.sizeSquare)
        }
        reverseModuloSquare(arg) {
            return arg - (arg % carte.sizeSquare) + carte.sizeSquare
        }

    }
    window.utils = new utilsClass()
})


