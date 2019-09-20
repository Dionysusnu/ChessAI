/* global Piece, Move */
class Knight extends Piece {
	constructor(board, x, y, color) {
		super(board, x, y, color);
		this.letter = 'N';
	}

	calcMoves() {
		const array = [];
		this.board.isOnBoard(this.x - 2, this.y - 1) && !this.board.findPiece(this.x - 2, this.y - 1, this.color) && array.push(new Move(this, `N${this.board.findPiece(this.x - 2, this.y - 1) ? 'x' : ''}${this.board.toLetter(this.x - 2)}${this.y - 1}`, this.x - 2, this.y - 1));
		this.board.isOnBoard(this.x - 2, this.y + 1) && !this.board.findPiece(this.x - 2, this.y + 1, this.color) && array.push(new Move(this, `N${this.board.findPiece(this.x - 2, this.y + 1) ? 'x' : ''}${this.board.toLetter(this.x - 2)}${this.y + 1}`, this.x - 2, this.y + 1));
		this.board.isOnBoard(this.x + 2, this.y - 1) && !this.board.findPiece(this.x + 2, this.y - 1, this.color) && array.push(new Move(this, `N${this.board.findPiece(this.x + 2, this.y - 1) ? 'x' : ''}${this.board.toLetter(this.x + 2)}${this.y - 1}`, this.x + 2, this.y - 1));
		this.board.isOnBoard(this.x + 2, this.y + 1) && !this.board.findPiece(this.x + 2, this.y + 1, this.color) && array.push(new Move(this, `N${this.board.findPiece(this.x + 2, this.y + 1) ? 'x' : ''}${this.board.toLetter(this.x + 2)}${this.y + 1}`, this.x + 2, this.y + 1));
		this.board.isOnBoard(this.x - 1, this.y - 2) && !this.board.findPiece(this.x - 1, this.y - 2, this.color) && array.push(new Move(this, `N${this.board.findPiece(this.x - 1, this.y - 2) ? 'x' : ''}${this.board.toLetter(this.x - 1)}${this.y - 2}`, this.x - 1, this.y - 2));
		this.board.isOnBoard(this.x - 1, this.y + 2) && !this.board.findPiece(this.x - 1, this.y + 2, this.color) && array.push(new Move(this, `N${this.board.findPiece(this.x - 1, this.y + 2) ? 'x' : ''}${this.board.toLetter(this.x - 1)}${this.y + 2}`, this.x - 1, this.y + 2));
		this.board.isOnBoard(this.x + 1, this.y - 2) && !this.board.findPiece(this.x + 1, this.y - 2, this.color) && array.push(new Move(this, `N${this.board.findPiece(this.x + 1, this.y - 2) ? 'x' : ''}${this.board.toLetter(this.x + 1)}${this.y - 2}`, this.x + 1, this.y - 2));
		this.board.isOnBoard(this.x + 1, this.y + 2) && !this.board.findPiece(this.x + 1, this.y + 2, this.color) && array.push(new Move(this, `N${this.board.findPiece(this.x + 1, this.y + 2) ? 'x' : ''}${this.board.toLetter(this.x + 1)}${this.y + 2}`, this.x + 1, this.y + 2));
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