export default class pineapple extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'pineapple');
        scene.add.existing(this);
    }
}