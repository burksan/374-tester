

export default class Food extends Phaser.Physics.Arcade.Sprite {
    body: Phaser.Physics.Arcade.Body;
    score: number;

    constructor(scene,x,y) {
        
        super(scene, x, y, "enemy");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        //this.body.setAllowGravity(false);
        this.body.velocity.x = -60;
        this.score = 20;
        
    }

    update(){
        if(this.x < 0){
            this.destroy();
        }
    }
}