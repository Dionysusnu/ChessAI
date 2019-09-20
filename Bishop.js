/* global Piece, Move */
class Bishop extends Piece {
	constructor(board, x, y, color) {
		super(board, x, y, color);
		this.letter = 'B';
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
			array.push(new Move(this, `B${takes ? 'x' : ''}${this.board.toLetter(x)}${y}`, x, y));
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
			array.push(new Move(this, `B${takes ? 'x' : ''}${this.board.toLetter(x)}${y}`, x, y));
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
			array.push(new Move(this, `B${takes ? 'x' : ''}${this.board.toLetter(x)}${y}`, x, y));
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
			array.push(new Move(this, `B${takes ? 'x' : ''}${this.board.toLetter(x)}${y}`, x, y));
			if (takes) break;
		}
		console.log(this);
		console.log(array);
		return array;
	}

	hits(xtarget, ytarget) {
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