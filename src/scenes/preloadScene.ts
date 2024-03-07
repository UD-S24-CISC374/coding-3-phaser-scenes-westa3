import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("sky", "assets/img/sky.png");
        this.load.image("platform", "assets/img/platform.png");
        this.load.image("bomb", "assets/img/bomb.png");
        this.load.image("star", "assets/img/star.png");
        this.load.spritesheet("dude", "assets/img/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.scene.start("MainScene");
    }
}
