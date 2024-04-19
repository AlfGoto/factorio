document.addEventListener('DOMContentLoaded', () => {
    class utilsClass {
        constructor() {
            this.pxToSvw(1000)

            window.addEventListener('mousemove', e=>{
                this.mouseY = e.clientY
                this.mouseX = e.clientX
            })
        }
        pxToSvw(arg) { return arg / (window.innerWidth / 100) }
        svwToPx(arg) {return  arg * (window.innerWidth / 100)}
    }
    window.utils = new utilsClass()
})


