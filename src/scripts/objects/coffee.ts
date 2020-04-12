export default class coffee extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'coffee');
        scene.add.existing(this);
    }
}