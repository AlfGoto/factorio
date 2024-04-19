document.addEventListener('DOMContentLoaded', () => {
    class selectorClass {
        constructor() {
            this.dom = document.getElementById('selector')
            this.open = false
            this.displaying = false
            this.arr = []

            this.displayImage = ''
            this.displayDom = document.createElement('img')
            document.body.appendChild(this.displayDom)
            this.displayDom.id = 'display'
            this.displayDom.style.height = carte.sizeSquare + 'svw'
            this.displayDom.style.display = 'none'

            document.addEventListener('keydown', e => { if (e.keyCode == 70) this.openSelector() })
            setInterval(()=>{this.display()},50)
        }
        display(){
            if(this.displaying){
                document.body.style.cursor = 'none'
                this.displayDom.style.display = 'block'
                this.displayDom.src = this.displayImage
                let decalMapY = Math.abs((Number(carte.map.style.top.replace('svw', '')) % carte.sizeSquare).toFixed(3))
                let decalMapX = Math.abs((Number(carte.map.style.left.replace('svw', '')) % carte.sizeSquare).toFixed(3))
                let x = utils.pxToSvw(utils.mouseX)
                x = x - (x % carte.sizeSquare)
                let y = utils.pxToSvw(utils.mouseY)
                y = y - (y % carte.sizeSquare)
                this.displayDom.style.top = (y - decalMapY) + 'svw'
                this.displayDom.style.left = (x - decalMapX) + 'svw'

            }else{
                document.body.style.cursor = 'auto'
                this.displayDom.style.display = 'none'
            }
        }
        openSelector() {
            if(this.open){
                this.dom.style.bottom = '-10svw'
                this.displaying = false
            }else{
                this.dom.style.bottom = '0svw'
            }
            this.open = !this.open
        }
    }
    window.selector = new selectorClass()

    class buildInSelector{
        constructor(name, obj){
            this.name = name

            this.dom = document.createElement('img')
            this.dom.src = 'icons/' + this.name + '.png'
            selector.dom.appendChild(this.dom)
            this.dom.addEventListener('click', ()=>{this.click()})
        }
        click(){
            selector.displaying = true
            selector.displayImage = 'img/' + this.name + '.png'

            console.log('click on ' + this.name)
        }
    }

    window.selector.arr = [
        new buildInSelector('belt'),
        new buildInSelector('mine'),
    ]



})