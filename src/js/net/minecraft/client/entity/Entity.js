import BoundingBox from "../../util/BoundingBox.js";
import MathHelper from "../../util/MathHelper.js";

export default class Entity {

    constructor(minecraft, world) {
        this.minecraft = minecraft;
        this.world = world;

        this.group = new THREE.Object3D();

        this.x = 0;
        this.y = 0;
        this.z = 0;

        this.motionX = 0;
        this.motionY = 0;
        this.motionZ = 0;

        this.onGround = false;
        this.sneaking = false;

        this.rotationYaw = 0;
        this.rotationPitch = 0;

        this.prevX = 0;
        this.prevY = 0;
        this.prevZ = 0;

        this.prevRotationYaw = 0;
        this.prevRotationPitch = 0;

        this.distanceWalked = 0;
        this.nextStepDistance = 1;

        this.ticksExisted = 0;

        this.boundingBox = new BoundingBox();
    }

    onUpdate() {
        this.onEntityUpdate();
    }

    onEntityUpdate() {
        this.prevX = this.x;
        this.prevY = this.y;
        this.prevZ = this.z;

        this.prevRotationPitch = this.rotationPitch;
        this.prevRotationYaw = this.rotationYaw;

        this.ticksExisted++;
    }

    getEntityBrightness() {
        let x = MathHelper.floor(this.x);
        let y = MathHelper.floor(this.y + this.getEyeHeight());
        let z = MathHelper.floor(this.z);
        return this.world.getLightBrightness(x, y, z);
    }

    getEyeHeight() {
        return this.boundingBox.height() * 0.8;
    }

}