class Background {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y}); 
        this.spritesheet = ASSET_MANAGER.getAsset("./forest/Preview/Background.png");
        this.animation = new Animator(this.spritesheet, 0, 293, 928, 500, 1, 1, 0, false, true);   
    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 1);
    }

    update() {

    }
}