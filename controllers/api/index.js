const router = require("express").Router();

const userRoutes = require("./user-routes");
const eventRoutes = require("./event-routes");

router.use("/events", eventRoutes);
router.use("/users", userRoutes);

module.exports = router;
