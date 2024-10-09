import readlineSync from "readline-sync";

// input takes a prompt and returns the user's input
function input(prompt) {
  return readlineSync.question(prompt);
}

const answer = input("Want to play a game? ");
if (answer === "yes") {
  console.log("Great!");
} else {
  console.log("Oh, well, too bad.");
}

// creates a row x col matrix
function createChocolateBar(row, col) {
  const chocolateBar = [];
  // if row or col is less than 1, return undefined
  if (row < 1 || col < 1) return undefined;
  // create a row x col matrix and fill it with numbers and a P
  for (let i = 0; i < row; i += 1) {
    const list = [];
    for (let j = 0; j < col; j += 1) {
      if (i === 0 && j === 0) {
        list.push("P");
      } else {
        list.push((i + 1).toString() + (j + 1).toString());
      }
    }
    chocolateBar.push(list);
  }
  return chocolateBar;
}

function printChocolateBar(chocolateBar) {
  // if the chocolate bar is undefined, return undefined
  if (chocolateBar === undefined) return undefined;
  // print the chocolate bar
  for (let i = 0; i < chocolateBar.length; i += 1) {
    console.log(chocolateBar[i].join(" "));
  }
}

function chomp(chocolateBar, row, col) {
  const new_chocolateBar1 = [];
  for (let i = 0; i < chocolateBar.length; i += 1) {
    let list = chocolateBar[i];
    for (let j = 0; j < list.length; j += 1) {
      if (i >= row) {
        list = list.splice(0, col);
      }
    }
    if (list.length > 0) {
      new_chocolateBar1.push(list);
    }
  }
  return new_chocolateBar1;
}

function checkWinner(chocolateBar) {
  if (chocolateBar.length === 1 && chocolateBar[0].length === 1) {
    return true;
  }
  return false;
}

function askCellNumber(chocolateBar) {
  const run = true;
  while (run) {
    const inputString = input("Which cell do you want to eat? ");
    const row = parseInt(inputString[0], 10) - 1;
    const col = parseInt(inputString[1], 10) - 1;
    if (row >= 0 && col >= 0) {
      if (row < chocolateBar.length && inputString !== "11") {
        if (col < chocolateBar[row].length) {
          return [row, col];
        }
      }
    }
    console.log("Invalid input. Try again.");
  }
  return [0, 0];
}

function main() {
  let player1 = true;
  let row = 0;
  let col = 0;
  let chocolateBar = createChocolateBar(6, 7);

  console.log(
    "Welcome to Chomp! The goal of the game is to eat the entire chocolate bar."
  );

  while (!checkWinner(chocolateBar)) {
    printChocolateBar(chocolateBar);
    if (player1) {
      console.log("Player 1's turn.");
      player1 = false;
    } else {
      console.log("Player 2's turn.");
      player1 = true;
    }
    const [row, col] = askCellNumber(chocolateBar);
    chocolateBar = chomp(chocolateBar, row, col);
  }
  if (player1) {
    console.log("Player 2 wins!");
  } else {
    console.log("Player 1 wins!");
  }
}
main();