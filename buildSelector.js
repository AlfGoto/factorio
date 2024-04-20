document.addEventListener('DOMContentLoaded', () => {
    class selectorClass {
        constructor() {
            this.dom = document.getElementById('selector')
            this.open = false
            this.displaying = false
            this.arr = []

            this.rotationList = ['0deg', '90deg', '180deg', '270deg']
            this.rotation = 0

            this.displayImage = ''
            this.displayDom = document.createElement('img')
            carte.map.appendChild(this.displayDom)
            this.displayDom.id = 'display'
            this.displayDom.style.height = carte.sizeSquare + 'svw'
            this.displayDom.style.display = 'none'

            document.addEventListener('keydown', e => {
                // console.log(e) 
                if (e.keyCode == 70) this.openSelector()
                if (e.keyCode == 82) this.nextRotation()
            })
            document.addEventListener('click', (e) => { this.click(e) })
            setInterval(() => { this.display() }, 50)
        }
        display() {
            if (this.displaying) {
                document.body.style.cursor = 'none'
                this.displayDom.style.display = 'block'
                this.displayDom.src = this.displayImage
                this.displayDom.style.transform = "rotate(" + this.rotationList[this.rotation] + ')'
                let obj = utils.getXYOfMapFromClick()
                // console.log(obj)
                this.displayDom.style.top = obj.y*carte.sizeSquare + 'svw'
                this.displayDom.style.left = obj.x*carte.sizeSquare + 'svw'

            } else {
                document.body.style.cursor = 'auto'
                this.displayDom.style.display = 'none'
            }
        }
        openSelector() {
            if (this.open) {
                this.dom.style.bottom = '-10svw'
                this.displaying = false
            } else {
                this.dom.style.bottom = '0svw'
            }
            this.open = !this.open
        }
        nextRotation() {
            this.rotation++
            if (this.rotation == this.rotationList.length) this.rotation = 0
        }
        click(e) {
            if(e.target == this.dom) return
            let r = false
            this.arr.forEach(elem=>{if(e.target == elem.dom) r = true})
            if(r)return
            if (!this.displaying) return

            let co = utils.getXYOfMapFromClick()

            if(carte.grid[co.x][co.y] == ''){
                new this.classToPlace(co.x,co.y)
            }
            // this.displaying = false
        }
    }
    window.selector = new selectorClass()

    class buildInSelector {
        constructor(name, cla) {
            this.name = name
            this.class = cla

            this.dom = document.createElement('img')
            this.dom.src = 'icons/' + this.name + '.png'
            selector.dom.appendChild(this.dom)
            this.dom.addEventListener('click', () => { this.click() })
        }
        click() {
            selector.displaying = true
            selector.displayImage = 'img/' + this.name + '.png'
            selector.classToPlace = this.class
        }
    }

    selector.arr = [
        new buildInSelector('belt', belt),
        new buildInSelector('mine', mine),
    ]



})