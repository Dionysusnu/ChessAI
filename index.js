/* global Pawn, Knight, Bishop, Rook, Queen, King, Move, Board */

const board = new Board();
const pieces = [];
const moves = new Map();

function calcMoves() {
	for (const piece of pieces) {
		piece.calcMoves(board);
	}
}

function movePiece() {
	const input = document.getElementById('MOVE_INPUT').value;
	const move = moves.get(input);
	if (move) {
		board.move(move.x, move.y, move.promoteTo);
	} else {
		document.getElementById('ERROR_MESSAGE').innerHTML = 'Illegal move';
	}
}