class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super();
    this.scene = scene;

    this.countMax = 10;
    this.counterCreated = 0;

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.tick,
      callbackScope: this,
    });
  }

  tick() {
    if (this.counterCreated < this.countMax) {
      this.createEnemy();
    } else {
      this.timer.remove();
    }
  }

  getFirstDead() {}

  createEnemy() {
    let enemy = this.getFirstDead();

    if (!enemy) {
      enemy = Enemy.generate(this.scene);
      this.add(enemy);
    } else {
      enemy.reset();
    }

    enemy.move();
    ++this.counterCreated;
  }
}