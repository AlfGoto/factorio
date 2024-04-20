document.addEventListener('DOMContentLoaded', ()=>{
    class build{
        constructor(x,y){
            this.dom = carte.createSquare(x, y, 'bat')
            this.dom.classList.add(this.constructor.name)
            this.x = x
            this.y = y

            this.img = document.createElement('img')
            this.dom.appendChild(this.img)
            this.img.src = 'img/' + this.constructor.name + '.png'
            this.img.style.transform = "rotate(" + selector.rotationList[selector.rotation] + ')'

        }
    }

    class mine extends build{
        constructor(x,y){
            super(x,y)

        }
    }
    class belt extends build{
        constructor(x,y){
            super(x,y)

        }
    }

    window.mine = mine
    window.belt = belt


})