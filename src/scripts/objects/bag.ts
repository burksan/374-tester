export default class bag extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'bag');
        scene.add.existing(this);
    }
}