let imagemCenario;
// let imagemPersonagem;
let cenario;
let somDoJogo;

const personagem = {
	sprite: "",
	width: 110,
	height: 135,
	posSpriteX: 0,
	posSpriteY: 0,
	widthSprite: 220,
	heightSprite: 270,
};

function preload() {
	imagemCenario = loadImage("imagens/cenario/floresta.png");
	personagem.sprite = loadImage("imagens/personagem/correndo.png");
	somDoJogo = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	somDoJogo.loop();
	cenario = new Cenario(imagemCenario, 3);
}

//height - personagem.height, personagem.width, personagem.posSpriteX, personagem.posSpriteY, personagem.widthSprite, personagem.heightSprite

function draw() {
	cenario.exibe();
	cenario.move();
	// image(imagemPersonagem, 0, height - 135, 110, 135, 0, 0, 220, 270);
	image(
		personagem.sprite,
		0,
		height - personagem.height,
		personagem.width,
		personagem.height,
		personagem.posSpriteX,
		personagem.posSpriteY,
		personagem.widthSprite,
		personagem.heightSprite,
	);
}

class Cenario {
	constructor(imagem, velocidade) {
		this.imagem = imagem;
		this.velocidade = velocidade;
		this.x1 = 0;
		this.x2 = width;
	}

	exibe() {
		image(this.imagem, this.x1, 0, width, height);
		image(this.imagem, this.x2, 0, width, height);
	}

	move() {
		this.x1 -= this.velocidade;
		this.x2 -= this.velocidade;

		if (this.x1 < -width) {
			this.x1 = width;
		}
		if (this.x2 < -width) {
			this.x2 = width;
		}
	}
}
