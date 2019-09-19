/* global Pawn, Knight, Bishop, Rook, Queen, King, Move, Board */

const board = new Board();
let moves = new Map();

function calcMoves() {
	moves = new Map();
	for (const [piece] of board.pieces) {
		const result = piece.calcMoves(board);
		for (const move of result) {
			moves.set(move.notation, move);
		}
	}
	let concatted = '';
	for (const str of moves.keys()) {
		concatted += str + '<br>';
	}
	document.getElementById('MOVE_LIST').innerHTML = concatted;
}

function movePiece() {
	const input = document.getElementById('MOVE_INPUT').value;
	const move = moves.get(input);
	if (move) {
		move.piece.move(move.x, move.y, move.promoteTo);
		board.redraw();
		calcMoves();
	} else {
		document.getElementById('ERROR_MESSAGE').innerHTML = 'Illegal move';
	}
}

function onLoad() {
	board.startNormal();
	board.redraw();
	calcMoves();
}