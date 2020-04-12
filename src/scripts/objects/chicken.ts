export default class chicken extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'chicken');
        scene.add.existing(this);
    }
}