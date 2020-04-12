export default class tea extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'tea');
        scene.add.existing(this);
    }
}