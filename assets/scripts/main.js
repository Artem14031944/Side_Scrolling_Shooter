const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [
    StartScene, 
    BootScene, 
    PreloadScene,
  ],
};

const game = new Phaser.Game(config);