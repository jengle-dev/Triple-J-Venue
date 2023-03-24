const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("landingpage");
});

module.exports = router;
