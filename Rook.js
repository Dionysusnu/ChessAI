/* global Piece, Move */
class Rook extends Piece {
	constructor(board, x, y, color) {
		super(board, x, y, color);
		this.letter = 'R';
	}

	calcMoves() {
		const array = [];
		const xtarget = this.x;
		const ytarget = this.y;
		let yincrement = this.y;
		while (yincrement <= 8) {
			yincrement++;
			this.board.isOnBoard(xtarget, yincrement) && !this.board.findPiece(xtarget, yincrement, this.color) && array.push(new Move(this, `R${this.board.findPiece(xtarget, yincrement) ? 'x' : ''}${this.board.toLetter(xtarget)}${yincrement}`, xtarget, yincrement));
			if (this.board.findPiece(xtarget, yincrement)) {
				break;
			}
		}
		yincrement = this.y;
		while (yincrement >= 1) {
			yincrement--;
			this.board.isOnBoard(xtarget, yincrement) && !this.board.findPiece(xtarget, yincrement, this.color) && array.push(new Move(this, `R${this.board.findPiece(xtarget, yincrement) ? 'x' : ''}${this.board.toLetter(xtarget)}${yincrement}`, xtarget, yincrement));
			if (this.board.findPiece(xtarget, yincrement)) {
				break;
			}
		}
		let xincrement = this.x;
		while (xincrement <= 8) {
			xincrement++;
			this.board.isOnBoard(xincrement, ytarget) && !this.board.findPiece(xincrement, ytarget, this.color) && array.push(new Move(this, `R${this.board.findPiece(xincrement, ytarget) ? 'x' : ''}${this.board.toLetter(xincrement)}${ytarget}`, xincrement, ytarget));
			if (this.board.findPiece(xincrement, ytarget)) {
				break;
			}
		}
		xincrement = this.x;
		while (xincrement >= 1) {
			xincrement--;
			this.board.isOnBoard(xincrement, ytarget) && !this.board.findPiece(xincrement, ytarget, this.color) && array.push(new Move(this, `R${this.board.findPiece(xincrement, ytarget) ? 'x' : ''}${this.board.toLetter(xincrement)}${ytarget}`, xincrement, ytarget));
			if (this.board.findPiece(xincrement, ytarget)) {
				break;
			}
		}
		console.log(this);
		console.log(array);
		return array;
	}

	hits(xtarget, ytarget) {
		if (xtarget !== this.x && ytarget !== this.y) {
			return false;
		}
		if (xtarget === this.x) {
			let yincrement = this.y;
			while (yincrement <= 8) {
				yincrement++;
				if (ytarget === yincrement) {
					return true;
				}
				if (this.board.findPiece(xtarget, yincrement)) {
					break;
				}
			}
			yincrement = this.y;
			while (yincrement >= 1) {
				yincrement--;
				if (ytarget === yincrement) {
					return true;
				}
				if (this.board.findPiece(xtarget, yincrement)) {
					break;
				}
			}
		} else {
			let xincrement = this.x;
			while (xincrement <= 8) {
				xincrement++;
				if (xtarget === xincrement) {
					return true;
				}
				if (this.board.findPiece(xincrement, ytarget)) {
					break;
				}
			}
			xincrement = this.x;
			while (xincrement >= 1) {
				xincrement--;
				if (xtarget === xincrement) {
					return true;
				}
				if (this.board.findPiece(xincrement, ytarget)) {
					break;
				}
			}
		}
		return false;
	}
}