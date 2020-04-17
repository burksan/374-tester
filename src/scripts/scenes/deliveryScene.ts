import tomato from '../objects/tomato';
import carrot from '../objects/carrot';
import lettuce from '../objects/lettuce';
import apple from '../objects/apple';
import banana from '../objects/banana';
import orange from '../objects/orange';
import pineapple from '../objects/pineapple';
import strawberry from '../objects/strawberry';
import watermelon from '../objects/watermelon';
import cheese from '../objects/cheese';
import chicken from '../objects/chicken';
import bacon from '../objects/bacon';
import ham from '../objects/ham';
import soda from '../objects/soda';
import tea from '../objects/tea';
import coffee from '../objects/coffee';
import lemonade from '../objects/lemonade';
import water from '../objects/water';
import bag from '../objects/bag';
import player from '../objects/player';
import { GameObjects } from 'phaser';

export default class DeliveryScene extends Phaser.Scene {
  private deliveryscene;
  private tomato: tomato;
  private carrot: carrot;
  private lettuce: lettuce;
  private apple: apple;
  private banana: banana;
  private orange: orange;
  private pineapple: pineapple;
  private strawberry: strawberry;
  private watermelon: watermelon;
  private cheese: cheese;
  private chicken: chicken;
  private bacon: bacon;
  private ham: ham;
  private soda: soda;
  private tea: tea;
  private coffee: coffee;
  private lemonade: lemonade;
  private water: water;
  private bag: bag;
  private player;
  cursorKeys;

  constructor() {
    super({ key: 'DeliveryScene' });
  }

  create() {
    this.deliveryscene = this.add.image(0,0, "deliveryscene");
    this.deliveryscene.setOrigin(0,0);
  
    //Non-Food Related Items
    let bag = this.add.image(this.scale.width / 2 - 900, this.scale.height / 2 + 400, "bag").setInteractive();
    
    //Vegetables
    let tomato = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tomato").setInteractive();
    //this.tomato.setScale(1);
    this.input.setDraggable(tomato);

    this.input.dragDistanceThreshold = 16;
    
    this.input.on('dragstart', function (pointer, gameObject) {
      //change this color later
      gameObject.setTint(0xff0000);
  });
  
  this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX;
    gameObject.y = dragY;
  });

  this.input.on('dragend', function (pointer, gameObject) {
    gameObject.clearTint();
  });

    //this.tomato = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tomato");
    //this.carrot = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "carrot");
    //this.lettuce = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "lettuce");
    
    //Fruits
    //this.apple = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "apple");
    //this.banana = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "banana");
    //this.orange = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "orange");
    //this.pineapple = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "pineapple");
    //this.strawberry = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "strawberry");
    //this.watermelon = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "watermelon");

    //Meats
    //this.chicken = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "chicken");
    //this.bacon = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "bacon");
    //this.ham = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "ham");

    //Drinks
    //this.soda = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "soda");
    //this.coffee = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "coffee");
    //this.tea = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tea");
    //this.lemonade = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "lemonade");
    //this.water = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "water");

    //Other Food Related Items
    //this.cheese = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "cheese");

    

   // let arr = [];
    //let soda = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "soda");
    //arr.push(soda); // that doesnt work

    let foodarr = [["chicken", "pollo", "poulet"], ["bacon", "tocino", "bacon"], ["ham", "jamon", "jambon"]];
    let randFood = foodarr[Math.floor(Math.random() * 3)];

    // trying to group the images
    let group = this.physics.add.group();
    for(let i = 0; i < 3; i++){
      let chicken = this.physics.add.sprite(this.scale.width / 2, this.scale.height / 2, "chicken");
      let bacon = this.physics.add.sprite(this.scale.width / 2 - 500, this.scale.height / 2, "bacon");
      let ham = this.physics.add.sprite(this.scale.width / 2 - 800, this.scale.height / 2, "ham");   
      group.add(chicken);
      group.add(bacon);
      group.add(ham);
      chicken.setCollideWorldBounds(true);
      bacon.setCollideWorldBounds(true);
      ham.setCollideWorldBounds(true);
    }
    /* Phaser.Actions.Call(group.getChildren(), function(go) {
      go.setVelocityX(100)
    }); */

    // group.getChildren() returns an array
    let randomSprite = Phaser.Utils.Array.GetRandom(group.getChildren());
    

    let pictures = {'chicken': 'chicken.png', 'bacon': 'bacon.png', 'ham': 'ham.jpeg'}
    let filename = pictures['chicken'];
    /*with open(filename. 'rb') as f:
      image = f.read()*/
    for (var key in pictures){
      var value = pictures[key];
      //do something with value
    }


    this.player = this.physics.add.sprite(this.scale.width / 2-8, this.scale.height - 64, "player");
    this.player.setScale(10);
    this.player.play("thrust");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    });

    this.physics.add.collider(this.bag, this.tomato, function(bag, tomato){
      tomato.destroy();
    });

    this.physics.add.overlap(this.bag, this.tomato, this.deleteFood, null, this);

  }

  deleteFood(bag, tomato){
    bag.disableBody(true, true);
  }

  update() {
    this.movePlayerManager();
  }

  movePlayerManager(){
    

    //NOTE NOTE NOTE NOTE NOTE NOTE NOTE
    //PLAYER IS STILL MOVING DOWNWARD AND WE GOTTA FIX THIS

    
    if(this.cursorKeys.left.isDown){
      this.player.setVelocityX(-300);
    }
    else if(this.cursorKeys.right.isDown){
      this.player.setVelocityX(300);
    }
    else this.player.setVelocityX(0);

    if(this.cursorKeys.up.isDown){
      this.player.setVelocityY(-300);
    }
    else if(this.cursorKeys.down.isDown){
      this.player.setVelocityY(300);
    }
    else this.player.setVelocityY(0);
  }


}
