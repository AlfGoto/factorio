document.addEventListener('DOMContentLoaded', () => {
    class utilsClass {
        constructor() {
            this.pxToSvw(1000)
        }
        pxToSvw(arg) { return arg / (window.innerWidth / 100) }
        svwToPx(arg) {return  arg * (window.innerWidth / 100)}
    }
    window.utils = new utilsClass()
})