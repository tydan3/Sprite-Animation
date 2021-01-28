class Foreground {
    constructor(game) {
        Object.assign(this, {game}); 
        this.spritesheet = ASSET_MANAGER.getAsset("./forest/PNG/Background layers/Layer_0000_9.png");
        this.animation = new Animator(this.spritesheet, 0, 303, 928, 500, 1, 1, 0, false, true);   
   
    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 1);

    }

    update() {

    }
}