
BasicGame.MainMenu = function (game) {

  this.music = null;
  this.playButton = null;

};

BasicGame.MainMenu.prototype = {

  create: function () {
    // Displays the titlepage
    this.add.sprite(0, 0, 'titlepage');
    // Adds the text into the title page
    this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 + 80, "Press Z or tap/click game to start", { font: "20px monospace", fill: "#fff" });
    this.loadingText.anchor.setTo(0.5, 0.5);
    this.add.text(this.game.width / 2, this.game.height - 90, "image assets Copyright (c) 2002 Ari Feldman", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
      // Copyright notice, this should be kept if you're using the default assets.
    this.add.text(this.game.width / 2, this.game.height - 75, "sound assets Copyright (c) 2012 - 2013 Devin Watson", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
  },

  update: function () {
      // Add keyboard support for closing the main menu/starting the game
    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
      this.startGame();
    }
  },

  startGame: function (pointer) {
      // If you had main menu music enable, disable it here before the game starts.
    // this.music.stop();

    //  And start the actual game. Let the fun begin
    this.state.start('Game');

  }

};
