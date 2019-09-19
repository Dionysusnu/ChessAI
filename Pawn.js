/* global Piece, Move, Promotion, Knight, Bishop, Rook, Queen */
class Pawn extends Piece {
	constructor(board, x, y, color) {
		super(board, x, y, color);
	}

	calcMoves() {
		const array = [];
		switch(this.color) {
		case true: {
			if (!this.board.findPiece(this.x, this.y + 1)) {
				if (this.y === 7) {
					array.push(new Move(`${this.board.toLetter(this.x)}8`, this.x, this.y + 1, Knight));
					array.push(new Move(`${this.board.toLetter(this.x)}8`, this.x, this.y + 1, Bishop));
					array.push(new Move(`${this.board.toLetter(this.x)}8`, this.x, this.y + 1, Rook));
					array.push(new Move(`${this.board.toLetter(this.x)}8`, this.x, this.y + 1, Queen));
				} else {
					array.push(new Move(`${this.board.toLetter(this.x)}${this.y + 1}`, this.x, this.y + 1));
				}
			}
			break;
		}
		case false: {
			if (!this.board.findPiece(this.x, this.y - 1)) {
				if (this.y === 2) {
					array.push(new Move(`${this.board.toLetter(this.x)}1`, this.x, this.y - 1, Knight));
					array.push(new Move(`${this.board.toLetter(this.x)}1`, this.x, this.y - 1, Bishop));
					array.push(new Move(`${this.board.toLetter(this.x)}1`, this.x, this.y - 1, Rook));
					array.push(new Move(`${this.board.toLetter(this.x)}1`, this.x, this.y - 1, Queen));
				} else {
					array.push(new Move(`${this.board.toLetter(this.x)}${this.y - 1}`, this.x, this.y - 1));
				}
			}
			break;
		}
		}
	}
}