const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const Event = require("../../models/Event");

// create new user
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

// log in
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

    res.status(200).json({ message: "Success!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get user by id
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Event }], //this is currently throwing an error
    });
    const user = userData.get({ plain: true });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
});

// get all users
router.get("/", async (req, res) => {
  try {
    // association error
    // const userData = await User.findAll({
    //   include: [{ model: Event }],
    // });
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
});

module.exports = router;
