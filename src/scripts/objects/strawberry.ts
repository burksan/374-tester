export default class strawberry extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'strawberry');
        scene.add.existing(this);
    }
}