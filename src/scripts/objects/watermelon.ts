export default class watermelon extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'watermelon');
        scene.add.existing(this);
    }
}