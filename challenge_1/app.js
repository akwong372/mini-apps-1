window.onload = () => {
  const winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  var remainingSpaces = [0,1,2,3,4,5,6,7,8];
  var playerCombo = [];


  var boardItems = document.getElementsByClassName('boardItem');
  const resetButton = document.getElementById('resetButton');

  //define reset button function
  var resetAll = () => {
    remainingSpaces = [0,1,2,3,4,5,6,7,8]
    playerCombo = [];
    for (var i = 0; i < boardItems.length; i++) {
      boardItems[i].textContent = '[  ]';
    }
    for (var i = 0; i < boardItems.length; i++) {//reset click handlers
      boardItems[i].onclick = playerMoves;
    }
  };

  //define function to check if player wins
  var checkCombo = (combo) => {
    for (var i = 0; i < winCombos.length; i++) {
      if (winCombos[i].every((item) => { return combo.includes(item) })) {
        return true;
      }
    }
  };

  //define what happens when player clicks a space
  var playerMoves = (e) => {
    console.log(e)
    var element = document.getElementById(e.target.id)
    if (e.target.textContent === '[  ]') {
      element.textContent = '[x]'
    };
    playerCombo.push(Number(element.id));
    playerCombo.sort((a, b) => a - b);

    remainingSpaces.splice(remainingSpaces.indexOf(element.id), 1)
    console.log(remainingSpaces)

    if (playerCombo.length > 2 && checkCombo(playerCombo)) {
      for (var i = 0; i < boardItems.length; i++) {//remove click handlers
        boardItems[i].onclick = null;
      }
      console.log('u win')//winning message?
    }
  }

  //add click handlers to board and reset button
  for (var i = 0; i < boardItems.length; i++) {
    boardItems[i].onclick = playerMoves;
  }
  resetButton.onclick = resetAll;
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