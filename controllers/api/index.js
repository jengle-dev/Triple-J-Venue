const router = require("express").Router();

const userRoutes = require("./user-routes");
const eventRoutes = require("./event-routes");
const spaceRoutes = require("./space-routes");

router.use("/events", eventRoutes);
router.use("/users", userRoutes);
router.use("/spaces", spaceRoutes);

module.exports = router;
