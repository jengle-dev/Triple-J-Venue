const router = require("express").Router();
const Event = require("../../models/Event");
const User = require("../../models/User");
const Space = require("../../models/Space");

router.post("/", async (req, res) => {
  try {
    const eventData = await Event.create(req.body);
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    // need to fix error associated with this line
    // const eventData = await Event.findAll({ include: [{ model: Space }] });

    const eventData = await Event.findAll();
    const events = eventData.map((event) => event.get({ plain: true }));
    res.json(events);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
