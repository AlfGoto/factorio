document.addEventListener('DOMContentLoaded', () => {
    class build {
        constructor(x, y) {
            this.dom = carte.createSquare(x, y, 'bat')
            this.dom.classList.add(this.constructor.name)
            this.dom.obj = this
            this.x = Number(x)
            this.y = Number(y)

            this.rotation = selector.rotationList[selector.rotation]

            this.img = document.createElement('img')
            this.dom.appendChild(this.img)
            this.img.src = 'img/' + this.constructor.name + '.png'
            this.img.style.transform = "rotate(" + this.rotation + ')'
        }
    }

    class mine extends build {
        constructor(x, y) {
            super(x, y)
            this.speed = 10000
            this.inventory = new Inventory(1, 50)

            // this.dom.addEventListener('click', () => { console.log(this.dom) })

            setInterval(() => { this.checkBelt(utils.pointingTo(this.x, this.y, this.rotation)) }, 100)
            setInterval(()=>{this.mine()}, this.speed)
        }
        mine() {
                this.inventory.addItem(1)
                // this.mine()
                // this.checkBelt(utils.pointingTo(this.x, this.y, this.rotation))
        }
        checkBelt(obj) {
            if(this.inventory.slots[0].id == undefined) return
            if (obj.classList == null) return
            if (obj.classList.contains('belt')) {
                // console.log(obj.obj)
                if (!obj.obj.itemON) {
                    this.inventory.removeItem(1)
                    obj.obj.addItem(1)
                }
            }
        }
    }

    class belt extends build {
        constructor(x, y) {
            super(x, y)
            this.itemON = false
            this.itemId = ''

        }
        addItem(id) {
            this.itemId = id
            this.itemON = true
            this.item = document.createElement('img')
            this.dom.appendChild(this.item)
            this.item.classList.add('item')
            // this.item.style.transform = "rotate(" + this.rotation + ')'
            // console.log(ids[id])
            this.item.src = 'img/items/' + ids[id].name + '.png'
            this.item.classList.add('_' + this.rotation)
            setTimeout(() => { this.item.classList.add('_') }, 10)
            setTimeout(() => {
                this.checkBelt(utils.pointingTo(this.x, this.y, this.rotation))
            }, 1000)
        }
        checkBelt(obj) {
            if (obj.classList == null) {
                this.reCheckBelt()
                return
            }
            if (obj.classList.contains('belt')) {
                // console.log(obj.obj)
                if (!obj.obj.itemON) {
                    this.itemON = false
                    obj.obj.addItem(this.itemId)
                    this.item.remove()
                    return
                } else { this.reCheckBelt() }
            }else if(obj.classList.contains('altar')){
                this.itemON = false
                obj.obj.on(this.itemId)
                this.item.remove()
            } else { this.reCheckBelt() }
        }
        reCheckBelt() {
            setTimeout(() => {
                this.checkBelt(utils.pointingTo(this.x, this.y, this.rotation))
            }, 105)
        }

    }

    class altar extends build{
        constructor(x,y){
            super(x, y)
        }
        on(id){
            // console.log(ids[id])
            player.addXp(ids[id].xp)
        }
    }

    window.mine = mine
    window.belt = belt
    window.altar = altar


})