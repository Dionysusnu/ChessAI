class Piece {
	constructor(board, x, y, color) {
		this.board = board;
		this.x = x;
		this.y = y;
		this.color = color;
	}

	move(x, y) {
		this.x = x;
		this.y = y;
		const piece = this.board.findPiece(x, y);
		piece && piece.take();
	}
}