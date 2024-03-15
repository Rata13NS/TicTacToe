let gridContainer = document.getElementById("gridContainer");
let winnerPlayer = document.getElementById("statusWinner");
let winnerButton = document.getElementById("winnerButton");
let boxes = [];
let userCounter = 1;
let buttonCounter = 0;
let neither = 0;
let stopfunction = true;
let currentPlayer;

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
            if (stopfunction === false) return;
            if (userCounter === 1) {
              box.textContent = 'X';
              currentPlayer = userCounter;
              userCounter = 2;
            } else {
              box.textContent = '0';
              currentPlayer = userCounter;
              userCounter = 1;
            }
            neitherOneWon();
            statusGame();
          }, {once:true});
      });
}

function statusGame() {
    if (boxes[0].textContent === boxes[1].textContent && boxes[1].textContent === boxes[2].textContent && boxes[1].textContent != '') {
        showWinner();
        restartButton();
        stopfunction = false;
    } else if (boxes[3].textContent === boxes[4].textContent && boxes[4].textContent === boxes[5].textContent && boxes[4].textContent != '') {
        showWinner();
        restartButton();
        stopfunction = false;
    } else if (boxes[6].textContent === boxes[7].textContent && boxes[7].textContent === boxes[8].textContent && boxes[7].textContent != '') {
        showWinner();
        restartButton();
        stopfunction = false;
    } else if (boxes[0].textContent === boxes[3].textContent && boxes[3].textContent === boxes[6].textContent && boxes[3].textContent != '') {
        showWinner();
        restartButton();
        stopfunction = false;
    } else if (boxes[1].textContent === boxes[4].textContent && boxes[4].textContent === boxes[7].textContent && boxes[4].textContent != '') {
        showWinner();
        restartButton();
        stopfunction = false;
    } else if (boxes[2].textContent === boxes[5].textContent && boxes[5].textContent === boxes[8].textContent && boxes[5].textContent != '') {
        showWinner();
        restartButton();
        stopfunction = false;
    } else if (boxes[0].textContent === boxes[4].textContent && boxes[4].textContent === boxes[8].textContent && boxes[4].textContent != '') {
        showWinner();
        restartButton();
        stopfunction = false;
    } else if (boxes[2].textContent === boxes[4].textContent && boxes[4].textContent === boxes[6].textContent && boxes[4].textContent != '') {
        showWinner();
        restartButton();
        stopfunction = false;
    } else if (neither === 9) {
        winnerPlayer.innerHTML = "Neither one won! Try a new game!";
        restartButton();
    }
}

function restartButton() {
    ++buttonCounter;
    let button = document.createElement("button");
    button.textContent="Restart the game";
    button.style.background = "rgba(0, 0, 255, 0.8)";
    winnerButton.appendChild(button);
    button.addEventListener('click', function() {
        button.parentNode.removeChild(button);
        gridContainer.innerHTML = '';
        winnerPlayer.innerHTML = '';
        boxes = [];
        userCounter = 1;
        stopfunction = true;
        createGrid();
        game();
    });
}

function showWinner() {
    winnerPlayer.innerHTML = "Conglaturations to Player " + currentPlayer + "! You are the winner!";
}

function neitherOneWon() {
    neither = 0;
    for (let i = 0; i < 9; i++) {
        if (boxes[i].textContent != '') {
            ++neither;
        }
    }
}
