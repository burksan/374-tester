export default class carrot extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'carrot');
        scene.add.existing(this);
    }
}