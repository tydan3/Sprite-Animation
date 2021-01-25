var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./martial-hero/Sprites/sheet.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	gameEngine.addEntity(new MartialHero(gameEngine, 0, 0));
	gameEngine.start();
});
