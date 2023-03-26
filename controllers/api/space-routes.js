const router = require("express").Router();
const Space = require("../../models/Space");
const Event = require("../../models/Event");

router.get("/", async (req, res) => {
  try {
    // need to fix error associated with this line
    // const spaceData = await Space.findAll({ include: [{ model: Event }] });

    const spaceData = await Space.findAll();
    const spaces = spaceData.map((space) => space.get({ plain: true }));
    res.status(200).json(spaces);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const spaceData = await Space.findByPk(req.params.id);
    const space = spaceData.get({ plain: true });
    res.status(200).json(space);
  } catch (err) {
    res.status.json(err);
  }
});

module.exports = router;
