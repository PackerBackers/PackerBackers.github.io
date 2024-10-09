// One could move the initial message to the HTML file. 
// Is first/second better than 0/1?
const player = ["One", "Two"];
printChocolateBar(createChocolateBar(6, 7), 0, player);
// Print message player [0] turn to select
document.getElementById("message").innerText = `Player ${ player [0] } turn to select!`;


// Prints the chocolate bar to the screen
function printChocolateBar(gameboard, turn, player) {
  const gameboardHolder = document.getElementById("gameboardHolder");
  gameboardHolder.innerHTML = "";
  for (let i = 0; i < gameboard.length; i += 1) {
    const divrow = document.createElement("div");
    divrow.setAttribute("class", "row");
    for (let j = 0; j < gameboard[i].length; j += 1) {
      const divblock = document.createElement("div");
      divblock.innerHTML = gameboard[i][j];
      divrow.appendChild(divblock);
      divblock.addEventListener("click", () => {
        selectBlock(gameboard, i, j, turn, player);
      });
    }
    gameboardHolder.appendChild(divrow);
  }
}

// Creates a chocolate bar with the dimensions row x col
function createChocolateBar(row, col) {
  const bar = [];
  if (row < 1 || col < 1) return undefined;
  for (let i = 0; i < row; i += 1) {
    const list = [];
    for (let j = 0; j < col; j += 1) {
      if (i === 0 && j === 0) {
        list.push("P");
      } else {
        list.push((i + 1).toString() + (j + 1).toString());
      }
    }
    bar.push(list);
  }
  return bar;
}

// If only the P is left, the player who last took their turn wins.
function checkWinner(bar) {
  if (bar.length === 1) {
    if (bar[0].length === 1) {
      return true;
    }
  }
  return false;
}

// Chomps the chocolate bar at row x col
function chomp(bar, row, col) {
  const newBar = [];
  for (let i = 0; i < bar.length; i += 1) {
    let list = bar[i];
    for (let j = 0; j < list.length; j += 1) {
      if (i >= row) {
        list = list.splice(0, col);
      }
    }
    if (list.length !== 0) {
      newBar.push(list);
    }
  }
  return newBar;
}

function selectBlock(gameboard, row, col, turn, player) {
  if (!(row === 0 && col === 0)) {
    const bar = chomp(gameboard, row, col);
    printChocolateBar(bar, turn + 1, player);
    // Either someone wins or next players turn
    if (checkWinner(bar)) {
      printChocolateBar(chomp(gameboard, 0, 0), turn, player);
      document.getElementById("message").innerText = `The winner is player ${player[turn % 2]}!`;
    } else {
      document.getElementById("message").innerText = `Player ${player[(turn + 1) % 2]} turn to select!`;
    }
  }
}




