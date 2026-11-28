class Enemy extends Essence {
  static generateAttributes() {
    const x = config.width + 200;
    const y = Phaser.Math.Between(100, config.height - 100); 
    const id = Phaser.Math.Between(1, 4);

    return { x, y, frame: `enemy${id}` };
  }

  static generate(scene) {
    const { x, y, frame } = Enemy.generateAttributes();

    return new Enemy({
      scene, 
      x, 
      y, 
      texture: 'enemy', 
      frame: frame,
      velocity: -500,
    });
  }

  reset() {
    const { x, y, frame } = Enemy.generateAttributes();
    super.reset(x, y);
    
    this.setFrame(frame);
  }

  isDead() {
    return this.x < -this.width;
  }


}