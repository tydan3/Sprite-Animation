var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./forest/Preview/Background.png");
ASSET_MANAGER.queueDownload("./martial-hero/Sprites/sheet.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);
	gameEngine.addEntity(new Background(gameEngine, 0, 0));
	gameEngine.addEntity(new MartialHero(gameEngine, 0, 0));
	gameEngine.start();
});
