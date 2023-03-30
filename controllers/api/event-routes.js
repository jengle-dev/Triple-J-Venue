const router = require("express").Router();
const Event = require("../../models/Event");
const User = require("../../models/User");
const Space = require("../../models/Space");

// create new event
router.post("/", async (req, res) => {
  try {
    const eventData = await Event.create({
      event_name: req.body.event_name,
      date: req.body.date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      space_id: 1,
      requestor_id: 1,
    });
    res.status(200).json(eventData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// get all events
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

// get event by id
router.get("/:id", async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);
    const event = eventData.get({ plain: true });
    res.status(200).json(event);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
