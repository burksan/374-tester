export default class banana extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'banana');
        scene.add.existing(this);
    }
}