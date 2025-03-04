const size = 3;
const grid = document.getElementById("grid");
let cells = [];

// Crea la cuadrícula de 3x3
function createGrid() {
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.onclick = () => toggleLights(i);
        grid.appendChild(cell);
        cells.push(cell);
    }
    randomizeGrid();
}

// Alterna las luces al hacer clic en una celda
function toggleLights(index) {
    let x = index % size, y = Math.floor(index / size);
    toggleCell(x, y);
    toggleCell(x - 1, y);
    toggleCell(x + 1, y);
    toggleCell(x, y - 1);
    toggleCell(x, y + 1);
    checkWin();
}

// Cambia el estado de una celda si está dentro de los límites
function toggleCell(x, y) {
    if (x >= 0 && x < size && y >= 0 && y < size) {
        let idx = y * size + x;
        cells[idx].classList.toggle("on");
    }
}

// Aleatoriza la cuadrícula al inicio
function randomizeGrid() {
    cells.forEach(cell => { if (Math.random() > 0.5) cell.classList.add("on"); });
}

// Verifica si todas las luces están apagadas
function checkWin() {
    if (cells.every(cell => !cell.classList.contains("on"))) {
        document.getElementById("winner").style.display = "block";
    }
}

// Reinicia el juego
function resetGame() {
    cells.forEach(cell => cell.classList.remove("on"));
    document.getElementById("winner").style.display = "none";
    randomizeGrid();
}

// Inicializa la cuadrícula al cargar la página
createGrid();
