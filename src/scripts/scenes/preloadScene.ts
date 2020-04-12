export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {

    this.load.image("deliveryscene", "assets/images/deliveryscene.png");

    this.load.image("tomato", "assets/images/tomato.jpeg");

    this.load.spritesheet("player", "assets/images/player.png", {frameWidth: 16, frameHeight: 24});

  }

  create() {
    this.scene.start('MainScene');
  }
}
