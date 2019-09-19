/* global Pawn, Knight, Bishop, Rook, Queen, King */
const letters = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const textHeight = 40;
class Board {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.canvas.width = 480;
		this.canvas.height = 480;
		this.context = this.canvas.getContext('2d');
		this.context.textAlign = 'center';
		this.context.font = `${textHeight}px Calibri`;
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.clear();
		this.pieces = new Map();
	}

	startNormal() {
		this.clear();
		for (let x = 1; x <= 8; x++) {
			new Pawn(this, x, 2, true);
			new Pawn(this, x, 7, false);
		}
		/*
		new Knight(this, 2, 1, true);
		new Knight(this, 7, 1, true);
		new Knight(this, 2, 8, false);
		new Knight(this, 7, 8, false);
		new Bishop(this, 3, 1, true);
		new Bishop(this, 6, 1, true);
		new Bishop(this, 3, 8, false);
		new Bishop(this, 6, 8, false);
		new Rook(this, 1, 1, true);
		new Rook(this, 8, 1, true);
		new Rook(this, 1, 8, false);
		new Rook(this, 8, 8, false);
		new Queen(this, 4, 1, true);
		new Queen(this, 4, 8, false);
		new King(this, 5, 1, true);
		new King(this, 5, 8, false);
		*/
	}

	setColor(color) {
		switch(color) {
		case true: {
			this.context.fillStyle = '#FFFFFF';// White pieces
			break;
		}
		case false: {
			this.context.fillStyle = '#000000';// Black pieces
			break;
		}
		}
	}

	clear() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		const tileWidth = this.canvas.width >> 3;
		const tileHeight = this.canvas.height >> 3;
		this.context.fillStyle = '#c7c7c7';// White squares
		for (let x = 0; x < this.canvas.width; x += tileWidth * 2) {
			for (let y = 0; y < this.canvas.height; y += tileHeight * 2) {
				this.context.fillRect(x, y, tileWidth, tileHeight);
			}
		}
		for (let x = tileWidth; x < this.canvas.width; x += tileWidth * 2) {
			for (let y = tileHeight; y < this.canvas.height; y += tileHeight * 2) {
				this.context.fillRect(x, y, tileWidth, tileHeight);
			}
		}
		this.context.fillStyle = '#525252';// Black squares
		for (let x = 0; x < this.canvas.width; x += tileWidth * 2) {
			for (let y = tileHeight; y < this.canvas.height; y += tileHeight * 2) {
				this.context.fillRect(x, y, tileWidth, tileHeight);
			}
		}
		for (let x = tileWidth; x < this.canvas.width; x += tileWidth * 2) {
			for (let y = 0; y < this.canvas.height; y += tileHeight * 2) {
				this.context.fillRect(x, y, tileWidth, tileHeight);
			}
		}
	}

	redraw() {
		this.clear();
		const height = this.canvas.height;
		const tileWidth = this.canvas.width >> 3;
		const tileHeight = height >> 3;
		const offsetX = tileWidth / 2;
		const offsetY = tileHeight / 2 + textHeight / 4;
		for (const [piece] of this.pieces) {
			this.setColor(piece.color);
			this.context.fillText(piece.letter, (piece.x - 1) * tileWidth + offsetX, height - ((piece.y - 1) * tileHeight + offsetY / 2));
		}
	}

	findPiece(x, y, color) {
		if (color !== undefined) {
			for (const [piece] of this.pieces) {
				if (piece.x === x && piece.y === y && piece.color === color) {
					return piece;
				}
			}
		} else {
			for (const [piece] of this.pieces) {
				if (piece.x === x && piece.y === y) {
					return piece;
				}
			}
		}
	}

	toLetter(num) {
		return letters[num];
	}
}