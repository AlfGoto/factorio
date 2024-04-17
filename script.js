document.addEventListener('DOMContentLoaded', () => {
    console.log('script connected')

    //setup la taille de la map
    let size = 20
    let totalSize = size * 100
    let map = document.getElementById('map')
    map.style.height = totalSize + 'svw'
    map.style.width = totalSize + 'svw'


    // Disons qu'une case fait 4svw
    let sizeSquare = 4

    //faisons l'array de la grille.
    let grid = []
    for (let x = 0; x < totalSize / sizeSquare; x++) {
        grid[x] = []
        for (let y = 0; y < totalSize / sizeSquare; y++) {
            //disons que la case est vide de base
            grid[x][y] = ''
            if (Math.random() * 100 < 5) {
                grid[x][y] = 'stop'
            }
        }
    }
    
    console.log(grid)
    
    createSquare(1, 1)
    createSquare(1, 3)

    function createSquare(x, y) {
        grid[x][y] = 'square'
        let square = document.createElement('div')
        square.classList.add('square')
        square.style.height = sizeSquare + 'svw'
        square.style.width = sizeSquare + 'svw'
        square.style.top = y*sizeSquare + 'svw'
        square.style.left = x*sizeSquare + 'svw'
        map.appendChild(square)

        console.log(square)
    }
})