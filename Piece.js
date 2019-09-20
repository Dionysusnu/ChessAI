class Piece {
	constructor(board, x, y, color) {
		this.board = board;
		this.board.pieces.set(this, this);
		this.x = x;
		this.y = y;
		this.color = color;
		this.hasMoved = false;
	}

	move(x, y, promoteTo) {
		const piece = this.board.findPiece(x, y);
		const deleted = piece && piece.take();
		promoteTo && this.board.pieces.delete(this);
		promoteTo && new promoteTo(this.board, x, y, this.color);
		this.x = x;
		this.y = y;
		return deleted;
	}

	take() {
		this.board.pieces.delete(this);
		return this;
	}

	calcCheckMoves() {
		return this.calcMoves().filter(move => move.solvesCheck());
	}
}