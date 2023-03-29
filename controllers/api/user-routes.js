const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const Event = require("../../models/Event");
const { json } = require("body-parser");

// create new user
router.post("/", async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password: password,
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err.errors[0].message);
    const message = err.errors[0].message;
    res.statusMessage = message;
    res.status(400).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userData) {
      res.statusMessage =
        "There is no account associated with that email address.";
      res.status(404).json({
        message: "There is no account associated with that email address.",
      });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res.statusMessage = "Incorrect password.";
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
