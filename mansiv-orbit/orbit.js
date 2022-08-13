AFRAME.registerComponent("orbit", {
    schema: {
        radius: {
            type: "number",
            default: 10,
        },
        updateDelta: {
            type: "number",
            default: 0,
        },
        speed: {
            type: "number",
            default: 1,
        },
    },
    init: function () {
        this.timeElapsed = 0;
        this.updateDelta = this.data.updateDelta;
        this.speed = this.data.speed;
        this.r = this.data.radius;
        this.origin = {
            x: this.el.object3D.position.x,
            z: this.el.object3D.position.z,
        };
        this.angle = 1;
        this.getAngleRadians = function () {
            return this.angle * (Math.PI / 180);
        };
    },
    tick: function (time, timeDelta) {
        if (this.timeElapsed > this.updateDelta) {
            this.timeElapsed = 0;
            this.calculateNextPoint();
        }
        this.timeElapsed += timeDelta;
    },
    calculateNextPoint: function () {
        if (this.angle == 360) {
            this.angle = 1;
        }
        this.el.object3D.position.x = this.origin.x + this.r * Math.cos(this.getAngleRadians());
        this.el.object3D.position.z = this.origin.z + this.r * Math.sin(this.getAngleRadians());
        this.angle += this.speed;
    },
});
