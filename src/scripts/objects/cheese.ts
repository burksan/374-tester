export default class cheese extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'cheese');
        scene.add.existing(this);
    }
}