export default class lemonade extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'lemonade');
        scene.add.existing(this);
    }
}