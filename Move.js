class Move {
	constructor(piece, notation, x, y, promotesTo) {
		this.piece = piece;
		this.notation = notation;
		this.x = x;
		this.y = y;
		this.promotesTo = promotesTo;
	}
}