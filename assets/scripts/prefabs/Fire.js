class Fire extends Phaser.GameObjects.Sprite {
  constructor(data) {
    super(data.scene, data.x, data.y, data.texture);
    this.init(data);
  }

  static generate(scene) {
    const { x, y, id } = Enemy.generateAttributes();

    return new Enemy(scene, x, y, 'enemy', `enemy${id}`);
  }

  init(data) {
    this.scene.add.existing(this); 
    this.velocity = data.velocity;
  }

  move() {
    this.body.setVelocityX(this.velocity);
  }
}