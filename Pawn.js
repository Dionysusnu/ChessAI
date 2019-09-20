/* global Piece, Move, Knight, Bishop, Rook, Queen */
class Pawn extends Piece {
	constructor(board, x, y, color) {
		super(board, x, y, color);
		this.letter = 'P';
	}

	calcMoves() {
		const array = [];
		switch(this.color) {
		case true: {
			if (!this.board.findPiece(this.x, this.y + 1)) {
				if (this.y === 7) {
					array.push(new Move(this, `${this.board.toLetter(this.x)}8`, this.x, this.y + 1, Knight));
					array.push(new Move(this, `${this.board.toLetter(this.x)}8`, this.x, this.y + 1, Bishop));
					array.push(new Move(this, `${this.board.toLetter(this.x)}8`, this.x, this.y + 1, Rook));
					array.push(new Move(this, `${this.board.toLetter(this.x)}8`, this.x, this.y + 1, Queen));
				} else {
					if (!this.hasMoved && !this.board.findPiece(this.x, this.y + 2)) {
						array.push(new Move(this, `${this.board.toLetter(this.x)}${this.y + 2}`, this.x, this.y + 2));
					}
					array.push(new Move(this, `${this.board.toLetter(this.x)}${this.y + 1}`, this.x, this.y + 1));
				}
			}
			if (this.board.findPiece(this.x - 1, this.y + 1, false)) {
				array.push(new Move(this, `${this.board.toLetter(this.x)}x${this.board.toLetter(this.x - 1)}${this.y + 1}`, this.x - 1, this.y + 1));
			}
			if (this.board.findPiece(this.x + 1, this.y + 1, false)) {
				// take care of capture promotion later
				array.push(new Move(this, `${this.board.toLetter(this.x)}x${this.board.toLetter(this.x + 1)}${this.y + 1}`, this.x + 1, this.y + 1));
			}
			break;
		}
		case false: {
			if (!this.board.findPiece(this.x, this.y - 1)) {
				if (this.y === 2) {
					array.push(new Move(this, `${this.board.toLetter(this.x)}1`, this.x, this.y - 1, Knight));
					array.push(new Move(this, `${this.board.toLetter(this.x)}1`, this.x, this.y - 1, Bishop));
					array.push(new Move(this, `${this.board.toLetter(this.x)}1`, this.x, this.y - 1, Rook));
					array.push(new Move(this, `${this.board.toLetter(this.x)}1`, this.x, this.y - 1, Queen));
				} else {
					if (!this.hasMoved && !this.board.findPiece(this.x, this.y - 2)) {
						array.push(new Move(this, `${this.board.toLetter(this.x)}${this.y - 2}`, this.x, this.y - 2));
					}
					array.push(new Move(this, `${this.board.toLetter(this.x)}${this.y - 1}`, this.x, this.y - 1));
				}
			}
			if (this.board.findPiece(this.x - 1, this.y - 1, true)) {
				array.push(new Move(this, `${this.board.toLetter(this.x)}x${this.board.toLetter(this.x - 1)}${this.y - 1}`, this.x - 1, this.y - 1));
			}
			if (this.board.findPiece(this.x + 1, this.y - 1, true)) {
				array.push(new Move(this, `${this.board.toLetter(this.x)}x${this.board.toLetter(this.x + 1)}${this.y - 1}`, this.x + 1, this.y - 1));
			}
			break;
		}
		}
		console.log(this);
		console.log(array);
		return array;
	}

	hits(x, y) {
		if (y === (this.color ? this.y + 1 : this.y - 1)) {
			if (x === this.x - 1 || x === this.x + 1) {
				return true;
			}
		}
		return false;
	}
}