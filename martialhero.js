class MartialHero {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./martial-hero/Sprites/Attack1.png");
        this.animation = new Animator(this.spritesheet, 70, 48, 120, 80, 6, 0.1, 80, false, true);
    }


    update() {

    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, 300, 150, 3);
    }
}