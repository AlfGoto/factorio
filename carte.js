document.addEventListener('DOMContentLoaded', () => {
    console.log('script connected')

    class gameClass {

        constructor(obj) {
            //setup la taille de la map
            this.size = obj.size || 20
            this.totalSize = this.size * 100
            this.map = document.createElement('div')
            this.map.id = 'map'
            document.body.appendChild(this.map)
            this.map.style.height = this.totalSize + 'svw'
            this.map.style.width = this.totalSize + 'svw'
            this.map.style.top = (0 - (this.totalSize/2)) + 'svw'
            this.map.style.left = (0 - (this.totalSize/2)) + 'svw'


            // Disons qu'une case fait 4svw
            this.sizeSquare = obj.sizeSquare || 4

            //faisons l'array de la grille.
            this.grid = []
            for (let x = 0; x < this.totalSize / this.sizeSquare; x++) {
                this.grid[x] = []
                for (let y = 0; y < this.totalSize / this.sizeSquare; y++) {
                    //disons que la case est vide de base
                    this.grid[x][y] = ''
                    if (Math.random() * 100 < 5) {
                        this.grid[x][y] = 'square'
                        this.createSquare(x, y)
                    }
                }
            }

            // console.log(this.grid)

            this.createSquare(1, 1)
            this.createSquare(1, 3)

        }
        createSquare(x, y) {
            this.grid[x][y] = 'square'
            this.map.innerHTML += "<div class='square' style='height: " + this.sizeSquare + "svw; width: " + this.sizeSquare + "svw;top:" + y * this.sizeSquare + "svw;left:" + x * this.sizeSquare + "svw'></div>"
            // let square = document.createElement('div')
            // square.classList.add('square')
            // square.style.height = this.sizeSquare + 'svw'
            // square.style.width = this.sizeSquare + 'svw'
            // square.style.top = y * this.sizeSquare + 'svw'
            // square.style.left = x * this.sizeSquare + 'svw'
            // this.map.appendChild(square)

            // console.log(square)
        }
    }
    window.carte = new gameClass({ size: 4, sizeSquare: 2 })
})
