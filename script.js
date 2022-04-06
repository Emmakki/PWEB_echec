//il s'agit de l'utilisation d'une librairie
console.log("start")

var board = null
var game = new Chess()
var $status = $('#status')
var $pgn = $('#pgn')

function onDragStart (source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false

  // only pick up pieces for the side to move
  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false
  }
}

function onDrop (source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  })

  // illegal move
  if (move === null) { 
    return 'snapback'
  }else{
    console.log(board.fen());
  }
  updateStatus()
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
  board.position(game.fen())
}

function updateStatus () {
  var status = ''

  var moveColor = 'White'
  if (game.turn() === 'b') {
    moveColor = 'Black'
  }

  // checkmate?
  if (game.in_checkmate()) {
    status = 'Game over, ' + moveColor + ' is in checkmate.'
    console.log("checkmate")
  }

  // draw?
  else if (game.in_draw()) {
    status = 'Game over, drawn position'
    console.log("draw")
  }

  // game still on
  else {
    status = moveColor + ' to move'

    // check?
    if (game.in_check()) {
      status += ', ' + moveColor + ' is in check'
    }
  }

  $status.html(status)
  $pgn.html(game.pgn())
}

function reset() {
  board = null
  game = new Chess()
  board = Chessboard('myBoard', config)
  updateStatus()
}

var config = {
  pieceTheme: 'PWEB_echec/img/{piece}.png',
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
}
board = Chessboard('myBoard', config)

updateStatus()
//ici je vérifie que j'obtiens bien une position


/*
//je crée une structure qui servira de base à mon json et que je pourrais modifier si jamais je veux y ajouter d'autres choses par la suite
var game = {
    fenPos: []
 };
game.fenPos.push(board1.fen());
var json = JSON.stringify(game);
//var fs = require('fs');// ça ne marche pas ici
fs.writeFile('gamejson.json', json, 'utf8', callback);
*/
