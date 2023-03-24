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

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res.status(404).json({
        message: "There is no account associated with that username.",
      });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password." });
      return;
    }

    res.status(200).json({ message: "Sucess!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
