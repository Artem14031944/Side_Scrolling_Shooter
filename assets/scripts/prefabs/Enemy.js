class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  static generateAttributes() {
    const x = config.width + 200;
    const y = Phaser.Math.Between(100, config.height - 100); 
    const id = Phaser.Math.Between(1, 4);

    return { x, y, id };
  }

  static generate(scene) {
    const { x, y, id } = Enemy.generateAttributes();

    return new Enemy(scene, x, y, 'enemy', `enemy${id}`);
  }

  init() {
    this.scene.add.existing(this); 
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = -250 * 3;
    this.scene.events.on('update', this.update, this);
  }

  update() {
    if (this.active && this.x < -this.width) {
      this.setAlive(false);
    }
  }

  reset() {
    const { x, y, id } = Enemy.generateAttributes();

    this.x = x;
    this.y = y;
    this.setFrame(`enemy${id}`);

    this.setAlive(true);
  }

  setAlive(status) {
    this.body.enable = status;
    this.setVisible(status);
    this.setActive(status);
  }

  move() {
    this.body.setVelocityX(this.velocity);
  }
}