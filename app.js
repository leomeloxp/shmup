window.onload = function() {

  //  Create your Phaser game once the page is loaded.
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameContainer');
  //var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameContainer');

  //  Add the States your game has.
  game.state.add('Boot', BasicGame.Boot);
  game.state.add('Preloader', BasicGame.Preloader);
  game.state.add('MainMenu', BasicGame.MainMenu);
  game.state.add('Game', BasicGame.Game);

  // The boot order is defined above. Inside here we can decide to skip some steps
  // eg, for development. To do that uncomment the relevant .start line.
  game.state.start('Boot');
  $( "select" )
  .change(function () {
    $( "select option:selected" ).each(function() {
      BasicGame.PLAYER_SPRITE = $( this ).val();
      //  Now start the Boot state.
      game.state.start('Boot');
    });
  })
  .change();
};
