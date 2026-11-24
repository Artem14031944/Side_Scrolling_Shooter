class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.createBackground();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = new Player(this);
  }

  update() {
    
  }

  createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
  }
}