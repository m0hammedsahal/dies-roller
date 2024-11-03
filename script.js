document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const playerPiece = document.getElementById('playerPiece');
    const rollDiceBtn = document.getElementById('rollDiceBtn');
    const diceResult = document.getElementById('diceResult');
    const cells = [];

    // Generate the game board
    function generateBoard() {
        let cellNumber = 100;
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = cellNumber;
            board.appendChild(cell);
            cells.push(cell);
            cellNumber--;
        }
    }

    // Move the player piece
    function movePlayer(steps) {
        let newPosition = parseInt(playerPiece.dataset.position) + steps;
        if (newPosition > 100) {
            newPosition = 100 - (newPosition - 100); // Bounce back
        }
        const targetCell = cells[newPosition - 1].getBoundingClientRect();
        const container = document.querySelector('.container').getBoundingClientRect();
        playerPiece.style.left = `${targetCell.left - container.left}px`;
        playerPiece.style.top = `${targetCell.top - container.top}px`;
        playerPiece.dataset.position = newPosition;
        diceResult.textContent = `Dice rolled: ${steps}`;
    }

    // Roll the dice and move the player
    rollDiceBtn.addEventListener('click', () => {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        movePlayer(diceValue);
    });

    // Initialize the game
    generateBoard();
    playerPiece.dataset.position = 1; // Initial position
    playerPiece.style.left = '0px';
    playerPiece.style.top = '0px';
});
