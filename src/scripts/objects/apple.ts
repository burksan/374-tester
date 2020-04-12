export default class apple extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'apple');
        scene.add.existing(this);
    }
}