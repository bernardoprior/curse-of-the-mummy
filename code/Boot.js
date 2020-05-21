var bootState = {
  preload: () => {
    game.loadImages([
      ["level1", "assets/plats1.png"],
      ["boundsVertical", "assets/boundsVertical.png"],
      ["boundsHorizontal", "assets/boundsHorizontal.png"],
      ["backgroundLevel", "assets/level-background.png"],
      ["elevator", "assets/elevador.png"],
      ["chain", "assets/chain.png"],
      ["bigBox", "assets/bigBox.png"],
      ["smallBox", "assets/smallBox.png"],
      ["portaLil", "assets/portaLil.png"],
      ["portaBig", "assets/portaBig.png"],
      ["timerBoard", "assets/timerBoard.png"],
      ["1", "assets/1.png"],
      ["2", "assets/2.png"],
      ["3", "assets/3.png"],
      ["4", "assets/4.png"],
      ["5", "assets/5.png"],
      ["6", "assets/6.png"],
      ["7", "assets/7.png"],
      ["8", "assets/8.png"],
      ["9", "assets/9.png"],
      ["0", "assets/0.png"],
      ["collectableLilPeanut", "assets/collectableLilPeanut.png"],
      ["collectableBigMack", "assets/collectableBigMack.png"],
      ["collectableLilPeanutBoard", "assets/collectableLilPeanutBoard.png"],
      ["collectableBigMackBoard", "assets/collectableBigMackBoard.png"],
      ["menuBoard", "assets/MenuBoard.png"],
      ["restartBoard", "assets/RestartBoard.png"],
      //mainmenu
      ["menuBackground", "assets/menuBackground.png"],
      ["startBtn", "assets/startBtn.png"],
      ["optionsBtn", "assets/optionsBtn.png"],
      ["helpBtn", "assets/helpBtn.png"],
      ["rankingBtn", "assets/rankingBtn.png"],
      ["titleInline", "assets/title_inline.png"],
      ["lilPeanutImg", "assets/lil.png"],
      ["bigMackImg", "assets/Gordo.png"],
      //options
      ["optionsTitle", "assets/titles/options.png"],
      ["optionsSoundEffects", "assets/text_sprites/sound_effects.png"],
      ["optionsGameMusic", "assets/text_sprites/game_music.png"],
      ["optionsMenuMusic", "assets/text_sprites/menu_music.png"],
      ["SoundLess", "assets/Sound/SoundIconBaseSound-.png"],
      ["SoundPlus", "assets/Sound/SoundIconBaseSound+.png"],
      ["SoundOff", "assets/Sound/SoundIconBaseSoundOFF.png"],
      ["SoundBarEmpty", "assets/Sound/SoundBarEmpty.png"],
      ["SoundBarFilled", "assets/Sound/SoundBarFilled.png"],
      //ranking
      ["backBtn", "assets/backBtn.png"],
      ["rankingInline", "assets/ranking.png"],
      //help
      ["helpInline", "assets/help.png"],
      ["dKey", "assets/keys/KeySampleD.png"],
      ["eKey", "assets/keys/KeySampleE.png"],
      ["aKey", "assets/keys/KeySampleA.png"],
      ["downKey", "assets/keys/KeySampleHelpDown.png"],
      ["leftKey", "assets/keys/KeySampleHelpLeft.png"],
      ["rightKey", "assets/keys/KeySampleHelpRight.png"],
      ["upKey", "assets/keys/KeySampleHelpUp.png"],
      ["sKey", "assets/keys/KeySampleHelpS.png"],
      ["wKey", "assets/keys/KeySampleHelpW.png"],
      ["rightShiftKey", "assets/keys/KeySampleRightShift.png"],
      //levelSelector
      ["levelsInline", "assets/levels.png"],
      ["pyramidLevelSelector", "assets/pyramidLevelSelector.png"],
      ["bottomleftcolor", "assets/bottomleftcolor.png"],
      ["bottommidcolor", "assets/bottommidcolor.png"],
      ["bottomrightbw", "assets/bottomrightbw.png"],
      ["midleftbw", "assets/midleftbw.png"],
      ["midrightbw", "assets/midrightbw.png"],
      ["topbw", "assets/topbw.png"],
      //nameInput
      ["inputBox", "assets/text_sprites/nameinput.png"],
      ["nothing", "assets/nothing.png"],
      ["submitBtn", "assets/submitBtn.png"],
    ]);
    game.loadSpritesheet([["lilPeanut", "assets/lilPeanutSprite.png"]], 32);
    game.loadSpritesheet([["eletricSaw", "assets/eletricSawSprite.png"]], 32);
    game.loadSpritesheet([["button", "assets/buttonSprite.png"]], 32);
    game.loadSpritesheet([["torch", "assets/torchSprite.png"]], 32);
    game.loadSpritesheet(
      [["torchInverted", "assets/torchInvertedSprite.png"]],
      32
    );
    game.loadSpritesheet([["bigMack", "assets/bigMackSprite.png"]], 64);
    game.loadFonts();
  },

  create: () => {
    game.phaser.physics.startSystem(Phaser.Physics.ARCADE);
    game.phaser.state.start("Level1");
  },
};
