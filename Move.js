class Move {
	constructor(piece, notation, x, y, promotesTo) {
		this.piece = piece;
		this.notation = notation;
		this.x = x;
		this.y = y;
		this.promotesTo = promotesTo;
	}

	solvesCheck(color) {
		const oldx = this.piece.x;
		const oldy = this.piece.y;
		const hadMoved = this.piece.hasMoved;
		const deleted = this.piece.move(this.x, this.y);
		const solves = !this.piece.board.calcCheck(color);
		this.piece.x = oldx;
		this.piece.y = oldy;
		this.piece.hasMoved = hadMoved;
		deleted && this.piece.board.pieces.set(deleted, deleted);
		return solves;
	}
}