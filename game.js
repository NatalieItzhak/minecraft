const hello = document.querySelector('.hello')
const world = document.querySelector('#world');
const startBtn = document.querySelector('.start', '.action-button')
const resetBtn = document.querySelector(".reset-world");
const mainGame = document.querySelector('.main');
const stone = document.querySelector(".stone");
const leaves = document.querySelector(".leaves");
const wood = document.querySelector(".wood");
const grass = document.querySelector(".grass");
const soil = document.querySelector(".soil");
const axe = document.querySelector(".axe");
const pickaxe = document.querySelector(".pickaxe");
const shovel = document.querySelector(".shovel");


function start() {
    let x = hello.style.display = 'none'
    return x
}
startBtn.addEventListener("click", start);
startBtn.addEventListener('click', () => {
    world.style.display = "flex";
})
resetBtn.addEventListener('click', () => {
    hello.style.display = "flex";
    world.style.display = 'none';
    mainGame.innerHTML = '';
})

    const rows = 30;
    const cols = 30;

    const myArray = [];

    for (var i = 0; i < cols; i++) {
        myArray[i] = [];
        for (var j = 0; j < rows; j++) {
            const tile = document.createElement("div");
            tile.setAttribute("rows", 1);
            tile.setAttribute("cols", 1);
            tile.classList.add("sky");
            mainGame.appendChild(tile);
            myArray[i][j] = tile;
        }
    }

console.log(myArray)

// world.addEventListener('click', () => {
//     world.style.display = -1;
// })

const Array2 = new Array(rows);

for (var i = 0; i < Array2.length; i++) {
    Array2[i] = new Array(cols);
    const soil = document.createElement("div");
    soil.setAttribute("rows","soil");
    soil.setAttribute("cols","soil");
    soil.classList.add("soil");
    mainGame.appendChild(soil);
    Array2[i][j] = soil;
}

console.log(Array2)

const array3 = Array.from(Array(rows), () => new Array(cols));
console.log(array3)





let axeClicked;
let pickaxeClicked;
let shovelClicked;

axe.addEventListener('click', () => {
    if (axeClicked) {
        axeClicked = false;
        axe.style.background = '#000';
    } else {
        axeClicked = true;
        axe.style.background = 'blue';
        pickaxeClicked = false;
        pickaxe.style.background = '#000';
        shovelClicked = false;
        shovel.style.background = '#000';
    }
})
pickaxe.addEventListener('click', () => {
    if (pickaxeClicked) {
        pickaxeClicked = false;
        pickaxe.style.background = '#000';
    } else {
        axeClicked = false;
        axe.style.background = '#000';
        pickaxeClicked = true;
        pickaxe.style.background = 'blue';
        shovelClicked = false;
        shovel.style.background = '#000';
    }
})

shovel.addEventListener('click', () => {
    if (shovelClicked) {
        shovelClicked = false;
        shovel.style.background = '#000';
    } else {
        axeClicked = false;
        axe.style.background = '#000';
        pickaxeClicked = false;
        pickaxe.style.background = '#000';
        shovelClicked = true;
        shovel.style.background = 'blue';
    }
})


