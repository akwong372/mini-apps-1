window.onload = () => {
  const winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  var remainingSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var currentWinner = 'x';
  var playerScore = 0;
  var cpuScore = 0;
  var playerCombo = [];
  var cpuCombo = [];
  document.getElementById('playerName').textContent = prompt("Please Enter Your Name")

  var board = document.getElementById('board');
  var boardItems = document.getElementsByClassName('boardItem');
  const resetButton = document.getElementById('resetButton');

  //define reset button function
  var resetAll = () => {
    remainingSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    playerCombo = [];
    cpuCombo = [];
    for (var i = 0; i < boardItems.length; i++) {
      boardItems[i].textContent = '[  ]';
    }
    board.addEventListener('click', boardClicked, false);//reset click handlers
    document.getElementById('winMsg').textContent = '';
    if (currentWinner === 'o') {
      cpuTurn();
    }
  };

  //define function to check if player or cpu wins
  var checkCombo = (combo) => {
    for (var i = 0; i < winCombos.length; i++) {
      if (winCombos[i].every((item) => { return combo.includes(item) })) {
        return true;
      }
    }
  };

  //check for a tie
  var checkTie = () => {
    if (!checkCombo(cpuCombo) && !checkCombo(playerCombo) && remainingSpaces.length === 0) {
      return true;
    }
  }

  //define what happens on a tie
  var setTie = () => {
    document.getElementById('winMsg').textContent = 'It\'s a tie!';
    board.removeEventListener('click', boardClicked, false);//remove click handlers
  }

  //define what happens on cpus turn
  var cpuTurn = () => {
    if (!checkTie()) {
      var cpuMoves = remainingSpaces[Math.floor(Math.random() * remainingSpaces.length)];

      document.getElementById(cpuMoves).textContent = '[o]';
      remainingSpaces.splice(remainingSpaces.indexOf(cpuMoves), 1)
      cpuCombo.push(cpuMoves);

      if (checkCombo(cpuCombo)) {
        board.removeEventListener('click', boardClicked, false);//remove click handlers

        cpuScore++;
        currentWinner = "o";
        document.getElementById('cpuScore').textContent = 'O score: ' + cpuScore;
        document.getElementById('winMsg').textContent = 'You Lose!'//losing message?
      }
    } else {
      setTie();
    }
  }

  //define what happens when player clicks an empty space
  var playerMoves = (e) => {
    if (e.textContent === '[  ]') {
      e.textContent = '[x]'

      playerCombo.push(Number(e.id));
      remainingSpaces.splice(remainingSpaces.indexOf(Number(e.id)), 1)

      if (!checkTie()) {
        if (checkCombo(playerCombo)) {
          board.removeEventListener('click', boardClicked, false);//remove click handlers

          playerScore++;
          currentWinner = "x";
          document.getElementById('playerScore').textContent = 'X score: ' + playerScore;
          document.getElementById('winMsg').textContent = 'You Win!'//winning message?

        } else {//if player has not won
          cpuTurn();
        }
      } else {
        setTie();
      }
    }
  }

  //define what happens when board is clicked
  var boardClicked = (e) => {
    if (e.target.className === 'boardItem') {
      playerMoves(e.target);
    }
  }

  //add click handlers to board and reset button
  board.addEventListener('click', boardClicked, false);
  resetButton.addEventListener('click', resetAll, false);
};





//create 3x3 board
  //array of 3 arrays?


// the first move always starts with player X

// the app detects a win or tie and displays an appropriate message

// a button resets the game for a new round of gameplay



//player click function:
  //if the clicked space's text is []
    //change it to [x]
    //
  //push the id of the clicked space to the player combo
  //if the length of the player combo is greater than 2 AND contains all the items in one win combo
    //display a win message
    //disable the board until reseted