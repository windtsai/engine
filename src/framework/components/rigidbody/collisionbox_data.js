pc.extend(pc.fw, function () {

    /**
     * @name pc.fw.CollisionBoxComponentData
     * @constructor Create a new CollisionBoxComponentData
     * @class A box-shaped collision volume. use this in conjunction with a RigidBodyComponent to make a Box that can be simulated using the physics engine.
     * @property {pc.math.vec3} size The half extents of the box in the x, y and z axes.
     * @extends pc.fw.ComponentData
     */
    var CollisionBoxComponentData = function () {
        this.halfExtents = [0.5, 0.5, 0.5];

        // Non-serialized properties
        this.shape = null;
        this.model = null;
    };
    CollisionBoxComponentData = pc.inherits(CollisionBoxComponentData, pc.fw.ComponentData);

    return {
        CollisionBoxComponentData: CollisionBoxComponentData
    };
}());