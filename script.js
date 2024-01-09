// Variables
let turn = "X";
let cells = document.querySelectorAll(".cell");
let cellsArray = [...cells];
let system = document.querySelector(".system-text")
let gameOver = false;
let isDraw = false;

// Ajoute la fonction pour remplir les cases à chaque case
cellsArray.forEach(cell => cell.addEventListener("click", () => { FillCell(cell) }))

// Fonction pour remplir les cases
function FillCell(cell) {
    if (gameOver === false) {

        if (cell.textContent == "") {
            cell.textContent = turn;


            // Vérifie si le joueur gagne
            if (CheckWin() === false) {
                // Vérifie si il reste des cases vide sur la grille. Si oui, alors pas de match nul
                for (let cellContent of cellsArray) {
                    if (cellContent.textContent == "") {
                        isDraw = false;
                        break;
                    }
                    isDraw = true;
                }

                // Si pas de match nul, passe au tour suivant
                if (isDraw === false) {
                    turn = turn === "X" ? "O" : "X";
                    system.textContent = "Au tour de " + turn;
                }
                // Sinon bloque le jeu
                else {
                    gameOver = true;
                    system.textContent = "Match nul ! Appuyez sur F5 pour recommencer."
                }
            }


            else {
                gameOver = true;
                system.textContent = `Le joueur ${turn} à gagné ! Appuyez sur F5 pour recommencer.`
            }
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

            // Colorie la composition gagnante
            cellsArray[a].style.color = "yellow";
            cellsArray[b].style.color = "yellow";
            cellsArray[c].style.color = "yellow";
            return true;
        }
    }

    return false;
}