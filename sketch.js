let imagemCenario;
let imagemPersonagem;
let personagem;
let somDoJogo;

function preload() {
	imagemCenario = loadImage("imagens/cenario/floresta.png");
	imagemPersonagem = loadImage("imagens/personagem/correndo.png");
	somDoJogo = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	somDoJogo.loop();
	cenario = new Cenario(imagemCenario, 3);
	personagem = new Personagem(imagemPersonagem)
}

function draw() {
	cenario.exibe();
	cenario.move();
	personagem.exibe();
	// image(
	// 	personagem.sprite,
	// 	0,
	// 	height - personagem.height,
	// 	personagem.width,
	// 	personagem.height,
	// 	personagem.posSpriteX,
	// 	personagem.posSpriteY,
	// 	personagem.widthSprite,
	// 	personagem.heightSprite,
	// );
}