const router = require("express").Router();
const Event = require("../models/Event");

router.get("/", async (req, res) => {
  res.render("landingpage");
});

router.get("/register", async (req, res) => {
  res.render("register");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/calendar", async (req, res) => {
  const eventData = await Event.findAll();
  const events = eventData.map((event) => event.get({ plain: true }));
  res.render("calendar", { events });
});

router.get("/about-us", async (req, res) => {
  res.render("about-us");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
