import tomato from '../objects/tomato';

export default class MainScene extends Phaser.Scene {
  private deliveryscene;
  private tomato: tomato;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.deliveryscene = this.add.image(0,0, "deliveryscene");
    this.deliveryscene.setOrigin(0,0);
  
    this.tomato = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tomato");
    

    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });
  }

  update() {
  }
}
