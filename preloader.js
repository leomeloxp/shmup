
BasicGame.Preloader = function (game) {

  this.background = null;
  this.preloadBar = null;

  //this.ready = false;

};

BasicGame.Preloader.prototype = {

  preload: function () {

    //  Show the loading progress bar asset we loaded in boot.js
    this.stage.backgroundColor = '#2d2d2d';

    this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
    this.add.text(this.game.width / 2, this.game.height / 2 - 30, "Loading...", { font: "32px monospace", fill: "#fff" }).anchor.setTo(0.5, 0.5);

    //  This sets the preloadBar sprite as a loader sprite.
    //  What that does is automatically crop the sprite from 0 to full-width
    //  as the files below are loaded in.
    this.load.setPreloadSprite(this.preloadBar);

    //  Here we load the rest of the assets our game needs.
    this.load.image('titlepage', 'http://leomeloxp.net/shmup/assets/titlepage.png');
    this.load.image('sea', 'http://leomeloxp.net/shmup/assets/sea.png');
    this.load.image('bullet', 'http://leomeloxp.net/shmup/assets/bullet.png');
    this.load.image('enemyBullet', 'http://leomeloxp.net/shmup/assets/enemy-bullet.png');
    this.load.image('powerup1', 'http://leomeloxp.net/shmup/assets/powerup1.png');
    this.load.spritesheet('greenEnemy', 'http://leomeloxp.net/shmup/assets/enemy.png', 32, 32);
    this.load.spritesheet('whiteEnemy', 'http://leomeloxp.net/shmup/assets/shooting-enemy.png', 32, 32);
    this.load.spritesheet('boss', 'http://leomeloxp.net/shmup/assets/boss.png', 93, 75);
    this.load.spritesheet('explosion', 'http://leomeloxp.net/shmup/assets/explosion.png', 32, 32);
    this.load.spritesheet('player', 'http://leomeloxp.net/shmup/assets/player'+BasicGame.PLAYER_SPRITE+'.png', 64, 64);

    if (BasicGame.ENABLE_SOUND) {
      this.load.audio('explosion', ['assets/explosion.ogg', 'http://leomeloxp.net/shmup/assets/explosion.wav']);
      this.load.audio('playerExplosion', ['http://leomeloxp.net/shmup/assets/player-explosion.ogg', 'http://leomeloxp.net/shmup/assets/player-explosion.wav']);
      this.load.audio('enemyFire', ['http://leomeloxp.net/shmup/assets/enemy-fire.ogg', 'http://leomeloxp.net/shmup/assets/enemy-fire.wav']);
      this.load.audio('playerFire', ['http://leomeloxp.net/shmup/assets/player-fire.ogg', 'http://leomeloxp.net/shmup/assets/player-fire.wav']);
      this.load.audio('powerUp', ['http://leomeloxp.net/shmup/assets/powerup.ogg', 'http://leomeloxp.net/shmup/assets/powerup.wav']);
      // Load any other assets you add into your game follwing the same pattern
      //this.load.audio('titleMusic', ['audio/main_menu.mp3']);
    }
  },

  create: function () {

    //  Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
    this.preloadBar.cropEnabled = false;

  },

  update: function () {

    // If you wish to play with sound, uncomment this if block
    //if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
    //{
    //  this.ready = true;
      //Then we move to the Mainmenu
      this.state.start('MainMenu');
    //}

  }

};
