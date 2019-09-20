/* global Piece, Move */
class King extends Piece {
	constructor(board, x, y, color) {
		super(board, x, y, color);
		this.letter = 'K';
	}

	calcMoves() {
		const array = [];
		this.board.isOnBoard(this.x - 1, this.y - 1) && !this.board.findPiece(this.x - 1, this.y - 1, this.color) && array.push(new Move(this, `K${this.board.findPiece(this.x - 1, this.y - 1) ? 'x' : ''}${this.board.toLetter(this.x - 1)}${this.y - 1}`, this.x - 1, this.y - 1));
		this.board.isOnBoard(this.x - 1, this.y + 1) && !this.board.findPiece(this.x - 1, this.y + 1, this.color) && array.push(new Move(this, `K${this.board.findPiece(this.x - 1, this.y + 1) ? 'x' : ''}${this.board.toLetter(this.x - 1)}${this.y + 1}`, this.x - 1, this.y + 1));
		this.board.isOnBoard(this.x + 1, this.y - 1) && !this.board.findPiece(this.x + 1, this.y - 1, this.color) && array.push(new Move(this, `K${this.board.findPiece(this.x + 1, this.y - 1) ? 'x' : ''}${this.board.toLetter(this.x + 1)}${this.y - 1}`, this.x + 1, this.y - 1));
		this.board.isOnBoard(this.x + 1, this.y + 1) && !this.board.findPiece(this.x + 1, this.y + 1, this.color) && array.push(new Move(this, `K${this.board.findPiece(this.x + 1, this.y + 1) ? 'x' : ''}${this.board.toLetter(this.x + 1)}${this.y + 1}`, this.x + 1, this.y + 1));
		this.board.isOnBoard(this.x + 1, this.y) && !this.board.findPiece(this.x + 1, this.y, this.color) && array.push(new Move(this, `K${this.board.findPiece(this.x + 1, this.y) ? 'x' : ''}${this.board.toLetter(this.x + 1)}${this.y}`, this.x - 1, this.y));
		this.board.isOnBoard(this.x - 1, this.y) && !this.board.findPiece(this.x - 1, this.y, this.color) && array.push(new Move(this, `K${this.board.findPiece(this.x - 1, this.y) ? 'x' : ''}${this.board.toLetter(this.x - 1)}${this.y}`, this.x - 1, this.y));
		this.board.isOnBoard(this.x, this.y - 1) && !this.board.findPiece(this.x, this.y - 1, this.color) && array.push(new Move(this, `K${this.board.findPiece(this.x, this.y - 1) ? 'x' : ''}${this.board.toLetter(this.x)}${this.y - 1}`, this.x, this.y - 1));
		this.board.isOnBoard(this.x, this.y + 1) && !this.board.findPiece(this.x, this.y + 1, this.color) && array.push(new Move(this, `K${this.board.findPiece(this.x, this.y + 1) ? 'x' : ''}${this.board.toLetter(this.x)}${this.y + 1}`, this.x, this.y + 1));
		console.log(this);
		console.log(array);
		return array;
	}

	hits(x, y) {
		if (y === this.y + 1 || y === this.y - 1) {
			if (x === this.x - 2 || x === this.x + 2) {
				return true;
			}
		}
		if (y === this.y + 2 || y === this.y - 2) {
			if (x === this.x - 1 || x === this.x + 1) {
				return true;
			}
		}
		return false;
	}
}