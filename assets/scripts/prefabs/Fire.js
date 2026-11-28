class Fire extends Essence {
  static generate(scene, source) {
    const data = {
      scene,
      x: source.x + source.width / 2,
      y: source.y,
      texture: 'fire',
      velocity: 750,
    }

    return new Fire(data);
  }

  init(data) {
    this.scene.add.existing(this); 
    this.velocity = data.velocity;
    this.scene.events.on('update', this.update, this);
  }

  isDead() {
    return this.x < -this.width || this.x > config.width + this.width;
  }
}