// Variables
let turn = "X";
let cells = document.querySelectorAll(".cell");
let cellsArray = [...cells];
let system = document.querySelector(".system-text")
let gameOver = false;

// Ajoute la fonction pour remplir les cases à chaque case
cellsArray.forEach(cell => cell.addEventListener("click", () => { FillCell(cell) }))

// Fonction pour remplir les cases
function FillCell(cell) {
    if (gameOver === false) {

        if (cell.textContent == "") {
            cell.textContent = turn;
        }

        // Vérifie si le joueur gagne
        if (CheckWin() === false) {
            if (turn === "X") {
                turn = "O";
            }
            else {
                turn = "X";
            }
            system.textContent = "Au tour de " + turn;
        }
        else {
            gameOver = true;
            system.textContent = `Le joueur ${turn} à gagné ! Appuyez sur F5 pour recommencer.`
        }
    }
}

function CheckWin() {

    // Les combinaisons gagnantes
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winCombinations) {
        // parcours l'ensemble des combinaisons gagnantes, en assignant leur valeur dans un tableau à chaque itération
        const [a, b, c] = combo;


        // Vérifie si la combinaison est valide
        if (cellsArray[a].textContent !== "" &&
            cellsArray[a].textContent === cellsArray[b].textContent &&
            cellsArray[a].textContent === cellsArray[c].textContent) {
            return true;
        }
    }

    return false;
}