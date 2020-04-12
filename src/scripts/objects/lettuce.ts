export default class lettuce extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'lettuce');
        scene.add.existing(this);
    }
}