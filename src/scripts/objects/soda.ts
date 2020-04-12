export default class soda extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'soda');
        scene.add.existing(this);
    }
}