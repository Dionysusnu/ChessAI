/* global Board, Collection */

const board = new Board();
let moves = new Collection();
let currentColor = true;

function calcMoves(color, check) {
	moves = new Collection();
	for (const piece of board.pieces.filterValues(p => p.color === color)) {
		const result = piece.calcMoves(board);
		for (const move of result) {
			moves.set(move.notation, move);
		}
	}
	if (!moves.length) {
		if (check) {
			document.getElementById('MOVE_LIST').innerHTML = 'Checkmate!';
		} else {
			document.getElementById('MOVE_LIST').innerHTML = 'Stalemate!';
		}
	}
	let concatted = '';
	if (check) {
		concatted = 'Check!<br>';
		for (const str of moves.filterKeys(move => move.solvesCheck(currentColor))) {
			concatted += str + '<br>';
		}
		const tempArray = [];
		for (const value of moves.filterValues(move => move.solvesCheck(currentColor))) {
			tempArray.push(value);
		}
		moves = new Collection();
		for (const value of tempArray) {
			moves.set(value.notation, value);
		}
	} else {
		for (const str of moves.keys()) {
			concatted += str + '<br>';
		}
	}
	document.getElementById('MOVE_LIST').innerHTML = concatted;
	currentColor = !currentColor;
}

function movePiece() {
	const input = document.getElementById('MOVE_INPUT').value;
	const move = moves.get(input);
	if (move) {
		move.piece.move(move.x, move.y, move.promoteTo);
		board.redraw();
		calcMoves(currentColor, board.calcCheck(currentColor));
	} else {
		document.getElementById('ERROR_MESSAGE').innerHTML = 'Illegal move';
	}
}

function onLoad() {
	currentColor = true;
	board.startNormal();
	calcMoves(currentColor);
}