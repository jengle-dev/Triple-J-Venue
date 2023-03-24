const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
