/* global Piece, Move */
class Queen extends Piece {
	constructor(board, x, y, color) {
		super(board, x, y, color);
		this.letter = 'Q';
	}

	calcMoves() {
		const array = [];
		let x = this.x;
		let y = this.y;
		while (x < 8 && y < 8) {
			x++;
			y++;
			if (this.board.findPiece(x, y, this.color)) {
				break;
			}
			const takes = this.board.findPiece(x, y, !this.color);
			array.push(new Move(this, `Q${takes ? 'x' : ''}${this.board.toLetter(x)}${y}`, x, y));
			if (takes) break;
		}
		x = this.x;
		y = this.y;
		while (x < 8 && y > 1) {
			x++;
			y--;
			if (this.board.findPiece(x, y, this.color)) {
				break;
			}
			const takes = this.board.findPiece(x, y, !this.color);
			array.push(new Move(this, `Q${takes ? 'x' : ''}${this.board.toLetter(x)}${y}`, x, y));
			if (takes) break;
		}
		x = this.x;
		y = this.y;
		while (x > 1 && y > 1) {
			x--;
			y--;
			if (this.board.findPiece(x, y, this.color)) {
				break;
			}
			const takes = this.board.findPiece(x, y, !this.color);
			array.push(new Move(this, `Q${takes ? 'x' : ''}${this.board.toLetter(x)}${y}`, x, y));
			if (takes) break;
		}
		x = this.x;
		y = this.y;
		while (x > 1 && y < 8) {
			x--;
			y++;
			if (this.board.findPiece(x, y, this.color)) {
				break;
			}
			const takes = this.board.findPiece(x, y, !this.color);
			array.push(new Move(this, `Q${takes ? 'x' : ''}${this.board.toLetter(x)}${y}`, x, y));
			if (takes) break;
		}
		const xtarget = this.x;
		const ytarget = this.y;
		let yincrement = this.y;
		while (yincrement <= 8) {
			yincrement++;
			this.board.isOnBoard(xtarget, yincrement) && !this.board.findPiece(xtarget, yincrement, this.color) && array.push(new Move(this, `Q${this.board.findPiece(xtarget, yincrement) ? 'x' : ''}${this.board.toLetter(xtarget)}${yincrement}`, xtarget, yincrement));
			if (this.board.findPiece(xtarget, yincrement)) {
				break;
			}
		}
		yincrement = this.y;
		while (yincrement >= 1) {
			yincrement--;
			this.board.isOnBoard(xtarget, yincrement) && !this.board.findPiece(xtarget, yincrement, this.color) && array.push(new Move(this, `Q${this.board.findPiece(xtarget, yincrement) ? 'x' : ''}${this.board.toLetter(xtarget)}${yincrement}`, xtarget, yincrement));
			if (this.board.findPiece(xtarget, yincrement)) {
				break;
			}
		}
		let xincrement = this.x;
		while (xincrement <= 8) {
			xincrement++;
			this.board.isOnBoard(xincrement, ytarget) && !this.board.findPiece(xincrement, ytarget, this.color) && array.push(new Move(this, `Q${this.board.findPiece(xincrement, ytarget) ? 'x' : ''}${this.board.toLetter(xincrement)}${ytarget}`, xincrement, ytarget));
			if (this.board.findPiece(xincrement, ytarget)) {
				break;
			}
		}
		xincrement = this.x;
		while (xincrement >= 1) {
			xincrement--;
			this.board.isOnBoard(xincrement, ytarget) && !this.board.findPiece(xincrement, ytarget, this.color) && array.push(new Move(this, `Q${this.board.findPiece(xincrement, ytarget) ? 'x' : ''}${this.board.toLetter(xincrement)}${ytarget}`, xincrement, ytarget));
			if (this.board.findPiece(xincrement, ytarget)) {
				break;
			}
		}
		console.log(this);
		console.log(array);
		return array;
	}

	hits(xtarget, ytarget) {
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
		} else if (ytarget === this.y) {
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
		let x = this.x;
		let y = this.y;
		while (x < 8 && y < 8) {
			x++;
			y++;
			if (x === xtarget && y === ytarget) {
				return true;
			}
			if (this.board.findPiece(x, y)) {
				break;
			}
		}
		x = this.x;
		y = this.y;
		while (x < 8 && y > 1) {
			x++;
			y--;
			if (x === xtarget && y === ytarget) {
				return true;
			}
			if (this.board.findPiece(x, y)) {
				break;
			}
		}
		x = this.x;
		y = this.y;
		while (x > 1 && y > 1) {
			x--;
			y--;
			if (x === xtarget && y === ytarget) {
				return true;
			}
			if (this.board.findPiece(x, y)) {
				break;
			}
		}
		x = this.x;
		y = this.y;
		while (x > 1 && y < 8) {
			x--;
			y++;
			if (x === xtarget && y === ytarget) {
				return true;
			}
			if (this.board.findPiece(x, y)) {
				break;
			}
		}
		return false;
	}
}