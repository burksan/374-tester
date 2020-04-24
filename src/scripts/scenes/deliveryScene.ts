/* import tomato from '../objects/tomato';
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
import water from '../objects/water'; */
import food from '../objects/food';
import bag from '../objects/bag';
import player from '../objects/player';
import { GameObjects } from 'phaser';

export default class DeliveryScene extends Phaser.Scene {
  private deliveryscene;
  private orderscene;
  private tomato: any;
  /* private carrot: food;
  private lettuce: food;
  private apple: food;
  private banana: food;
  private orange: food;
  private pineapple: food;
  private strawberry: food;
  private watermelon: food;
  private cheese: food; */
  private chicken: any;
  private bacon: any;
  private ham: any;
  /* private soda: food;
  private tea: food;
  private coffee: food;
  private lemonade: food;
  private water: food; */
  private bag: bag;
  private player;
  private paper: any;
  private food: any;
  private foodList: any;
  private foodDragged: any;
  cursorKeys;
  score: number;
  scoreLabel;

  constructor() {
    super({ key: 'DeliveryScene' });
  }

  create() {
    //this.deliveryscene = this.add.image(0,0, "deliveryscene");
    //this.deliveryscene.setOrigin(0,0);

    this.orderscene = this.add.image(0,0, "orderscene");
    this.orderscene.setOrigin(0,0);
  
    //Non-Food Related Items
    this.bag = this.add.image(this.scale.width / 2 - 900, this.scale.height / 2 + 400, "bag").setInteractive();
    this.paper = this.add.image(200, 200, "paper");
    this.add.text(50,50, "Order:",{fill:"#000000", fontSize:"40px"});
    this.add.text(60,100, "chicken",{fill:"#000000", fontSize:"35px"});
    this.add.text(60,150, "ham",{fill:"#000000", fontSize:"35px"});
    this.add.text(60,200, "bacon",{fill:"#000000", fontSize:"35px"});

    this.food = ["chicken", "ham", "bacon"];
    this.foodList = [];

    //let foodGroup = this.physics.add.group();
    //foodGroup.add(this.tomato);
    //foodGroup.add(this.chicken);
    //foodGroup.add(this.ham);
    //foodGroup.add(this.bacon);
    //foodGroup.add(this.orange);
    //foodGroup.add(this.lettuce);

    //Vegetables
    this.tomato = this.physics.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tomato").setInteractive();
    this.tomato.setCollideWorldBounds(true);
    this.tomato.onWorldBounds = true;
    
    //this.tomato.setScale(1);
    this.input.setDraggable(this.tomato);

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
    this.chicken = this.physics.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "chicken").setInteractive();
    this.chicken.setCollideWorldBounds(true);
    this.chicken.onWorldBounds = true;
    this.input.setDraggable(this.chicken);
    this.bacon = this.physics.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "bacon").setInteractive();
    this.bacon.setCollideWorldBounds(true);
    this.bacon.onWorldBounds = true;
    this.input.setDraggable(this.bacon);
    this.ham = this.physics.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "ham").setInteractive();
    this.ham.setCollideWorldBounds(true);
    this.ham.onWorldBounds = true;
    this.input.setDraggable(this.ham);
    

    this.input.on('pointerdown', this.startDrag, this);
    this.physics.add.overlap(this.bag, this.chicken, this.eatFood, undefined, this);
    this.physics.add.overlap(this.bag, this.ham, this.eatFood, undefined, this);
    this.physics.add.overlap(this.bag, this.bacon, this.eatFood, undefined, this);


    //Drinks
    //this.soda = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "soda");
    //this.coffee = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "coffee");
    //this.tea = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tea");
    //this.lemonade = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "lemonade");
    //this.water = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "water");

    //Other Food Related Items
    //this.cheese = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "cheese");

    
    this.physics.add.collider(this.bag, this.tomato, this.eatFood, function(bag, tomato){
      tomato.destroy(true);
    });

    this.physics.add.overlap(this.bag, this.tomato, this.eatFood, undefined, this);

    


   // let arr = [];
    //let soda = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "soda");
    //arr.push(soda); // that doesnt work

    let foodarr = [["chicken", "pollo", "poulet"], ["bacon", "tocino", "bacon"], ["ham", "jamon", "jambon"]];
    let randFood = foodarr[Math.floor(Math.random() * 3)];

    // trying to group the images
    /* let group = this.physics.add.group();
    for(let i = 0; i < 3; i++){
      let chicken = this.physics.add.sprite(this.scale.width / 2, this.scale.height / 2, "chicken").setInteractive();
      let bacon = this.physics.add.sprite(this.scale.width / 2 - 500, this.scale.height / 2, "bacon").setInteractive();
      let ham = this.physics.add.sprite(this.scale.width / 2 - 800, this.scale.height / 2, "ham").setInteractive();   
      group.add(chicken);
      group.add(bacon);
      group.add(ham);
      chicken.setCollideWorldBounds(true);
      bacon.setCollideWorldBounds(true);
      ham.setCollideWorldBounds(true);
      group.setVelocityX(300);
      group.setVelocityY(-300);
      
    }  */
    
    /* Phaser.Actions.Call(group.getChildren(), function(go) {
      go.setVelocityX(100)
    });*/

    // group.getChildren() returns an array
    //let randomSprite = Phaser.Utils.Array.GetRandom(group.getChildren());
    

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
    this.player.setGravity(0,0);
    this.player.play("thrust");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    });

    this.physics.add.collider(this.bag, this.food, function(bag, food){
      food.destroy();
    });

    this.physics.add.overlap(this.bag, this.food, this.deleteFood, undefined, this);



    /*
    
https://phaser.io/tutorials/coding-tips-003

    this.physics.arcade.collide(
      this.food, this.conveyorbelt, 
      this.setFriction, null, this
  );*/

  }

  /*setFriction: function (food, conveyorbelt) {
    food.body.x -= conveyorbelt.body.x - conveyorbelt.body.prev.x;
  }*/

  moveChicken(chicken, speed){
    chicken.x += speed;
    if(chicken.x > 2500){
      this.resetChicken(chicken);
    }
  }

  resetChicken(chicken){
    chicken.x = 0;
    let randomY = Phaser.Math.Between(0, 1800);
    chicken.y = randomY;
  }
  moveHam(ham, speed){
    ham.x += speed;
    if(ham.x > 2500){
      this.resetHam(ham);
    }
  }

  resetHam(ham){
    ham.x = 0;
    let randomY = Phaser.Math.Between(0, 1800);
    ham.y = randomY;
  }
  moveBacon(bacon, speed){
    bacon.x += speed;
    if(bacon.x > 2500){
      this.resetChicken(bacon);
    }
  }

  resetBacon(bacon){
    bacon.x = 0;
    let randomY = Phaser.Math.Between(0, 1800);
    bacon.y = randomY;
  }
  


  deleteFood(bag, food){
    bag.disableBody(true, true);
  }


  eatFood(bag, tomato){
    tomato.destroy(true); 
    //this.beamSound.play();
    this.score += 5;
    this.scoreLabel.text = "SCORE " + this.score;
  }

  startDrag(pointer, targets){
    this.input.off('pointerdown', this.startDrag, this);
    this.foodDragged=targets[0];
    this.input.on('pointermove', this.doDrag, this);
    this.input.on('pointerup', this.stopDrag, this);

  }
  doDrag(pointer){
    this.foodDragged.x=pointer.x;
    this.foodDragged.y=pointer.y;
  }

  stopDrag(){
    this.input.on('pointerdown', this.startDrag, this);
    this.input.off('pointermove', this.doDrag, this);
    this.input.off('pointerup', this.stopDrag, this);
  }


  update() {
    this.moveChicken(this.chicken, 4);
    this.moveHam(this.ham, 4);
    this.moveBacon(this.bacon, 4);
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
