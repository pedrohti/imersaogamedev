class Personagem {
    constructor(imagem) {
        this.imagem = "";
        this.width = 110;
        this.height = 135;
        this.posSpriteX = 0;
        this.posSpriteY = 0;
        this.widthSprite = 220;
        this.heightSprite = 270;
    }

    exibe() {
		image(
            this.imagem,
            0,
            height - this.height,
            this.width,
            this.height,
            this.posSpriteX,
            this.posSpriteY,
            this.widthSprite,
            this.heightSprite,
        );
	}
}