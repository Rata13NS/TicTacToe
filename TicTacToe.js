let gridContainer = document.getElementById("gridContainer");
let winnerPlayer = document.getElementById("statusWinner");
let winnerButton = document.getElementById("winnerButton");
let boxes = [];
let userContor = 1;

function createGrid() {
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < 3; j++) {
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
            boxes.push(box);
        }                
        gridContainer.appendChild(row);
    }
}

function game() {
    boxes.forEach(function(box, index) {
        box.addEventListener('click', function() {
            if (userContor === 1) {
              box.textContent = 'X';
              userContor = 2;
            } else {
              box.textContent = '0';
              userContor = 1;
            }
            statusGame();
          });
      });
}

function statusGame() {
    if (boxes[0] === boxes[1] && boxes[1] === boxes[2]) {
        showWinner();
        restartButton();
    } else if (boxes[3] === boxes[4] && boxes[4] === boxes[5]) {
        showWinner();
        restartButton();
    } else if (boxes[6] === boxes[7] && boxes[7] === boxes[8]) {
        showWinner();
        restartButton();
    } else if (boxes[0] === boxes[3] && boxes[3] === boxes[6]) {
        showWinner();
        restartButton();
    } else if (boxes[1] === boxes[4] && boxes[4] === boxes[7]) {
        showWinner();
        restartButton();
    } else if (boxes[2] === boxes[5] && boxes[5] === boxes[8]) {
        showWinner();
        restartButton();
    } else if (boxes[0] === boxes[4] && boxes[4] === boxes[8]) {
        showWinner();
        restartButton();
    } else if (boxes[2] === boxes[4] && boxes[6] === boxes[8]) {
        showWinner();
        restartButton();
    }
}

function restartButton() {
    let button = document.createElement("button");
        button.textContent="Restart game";
        button.style.background = "rgba(0, 0, 255, 0.8)";
        winnerButton.appendChild(button);
        button.addEventListener('click', function() {
            boxes = [];
            userContor = 1;
            createGrid();
            game();
          });
}

function showWinner() {
    if (userContor === 1) {
        winnerPlayer.innerHTML = "The winner is Player 2";
    } else {
        winnerPlayer.innerHTML = "The winner is Player 1";
    }
}

// Trebuie sa implementez o functionalitate astfel incat daca apas pe o casuta care deja a fost apasata, sa nu se modifice continutul;