/* global Pawn, Knight, Bishop, Rook, Queen, King */
class Board {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.canvas.width = 480;
		this.canvas.height = 480;
		this.context = this.canvas.getContext('2d');
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		const tileWidth = this.canvas.width >> 3;
		const tileHeight = this.canvas.height >> 3;
		this.context.fillStyle = '#e3e3e3';// White
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
		this.context.fillStyle = '#525252';// Black
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
	startNormal() {
		for (let x = 1; x <= 8; x++) {
			new Pawn(this, x, 2, true);
			new Pawn(this, x, 7, false);
		}
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
	}

	clear() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		const tileWidth = this.canvas.width >> 3;
		const tileHeight = this.canvas.height >> 3;
		this.context.fillStyle = '#e3e3e3';// White
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
		this.context.fillStyle = '#525252';// Black
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
}