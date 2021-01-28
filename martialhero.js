class MartialHero {
    constructor(game, x, y, dummy) {
        Object.assign(this, {game, x, y, dummy});

        // spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./martial-hero/Sprites/sheet.png");

        // state variables
        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = running, 2 = attack, 3 = die

        // hero's animations
        this.animations = [];
        this.loadAnimations();
    }

    // creates array of animations based on states
    loadAnimations() {
        for (var i = 0; i < 4; i++) { // 4 states
            this.animations.push([]);
            for (var j = 0; j < 2; j++) { // 2 ways to face
                this.animations[i].push([]);
            }
        }
    
        this.animations[0][0] = new Animator(this.spritesheet, 70, 442, 120, 80, 8, 0.1, 80, false,
            true);
        this.animations[0][1] = new Animator(this.spritesheet, 70, 642, 120, 80, 8, 0.1, 80, false,
            true); 
        this.animations[1][0] = new Animator(this.spritesheet, 70, 842, 120, 80, 8, 0.1, 80, false,
            true);
        this.animations[1][1] = new Animator(this.spritesheet, 70, 1042, 120, 80, 8, 0.1, 80, true,
            true);                
        this.animations[2][0] = new Animator(this.spritesheet, 70, 42, 120, 80, 6, 0.07, 80, false,
            true);
        this.animations[2][1] = new Animator(this.spritesheet, 10, 242, 120, 80, 6, 0.07, 80, true,
            true);
    }

    update() {
        const TICK = this.game.clockTick;
        const SPEED = 4
    
        if (this.game.z) {
            this.state = 2;
            this.facing = 0;
        } else if (this.game.right) {
            this.state = 1;
            this.facing = 0;
            this.x += SPEED;
        } else if (this.game.left) {
            this.state = 1;
            this.facing = 1;
            this.x -= SPEED;
        } else if (this.game.facingLeft) {
            this.state = 0;
            this.facing = 1;
        } else {
            this.state = 0;
            this.facing = 0;
        }

    }

    draw(ctx) {
        if (this.dummy) {
            this.animations[0][1].drawFrame(this.game.clockTick, ctx, 810, 280, 2);

        } else {
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, 280, 2);
        }
    }
}