class Move {
	constructor(piece, notation, x, y, promotesTo) {
		this.piece = piece;
		this.notation = notation;
		this.x = x;
		this.y = y;
		this.promotesTo = promotesTo;
		this.oldx = piece.x;
		this.oldy = piece.y;
		this.hasMoved = piece.hasMoved;
		this.deleted = this.piece.board.findPiece(this.x, this.y);
	}

	solvesCheck(color) {
		this.piece.move(x, y, promotesTo);
		const solves = !this.piece.board.calcCheck(color);
		this.revert()
		return solves;
	}
	
	revert() {
		this.piece.x = this.oldx;
		this.piece.y = this.oldy;
		this.piece.hasMoved = this.hasMoved;
		const deleted = this.deleted;
		deleted && this.piece.board.pieces.set(deleted, deleted);
	}
}
