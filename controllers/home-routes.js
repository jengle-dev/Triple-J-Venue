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
  const today = new Date();
  console.log(today.toJSON().split("T")[0]);
  const events = eventData.map((event) => {
    // console.log(event.date);

    // if (event.date > today.toJSON().split("T")[0])
    return event.get({ plain: true });
  });
  console.log(events);
  res.render("calendar", { events });
});

router.get("/about-us", async (req, res) => {
  res.render("about-us");
});

router.get("/spaces", async (req, res) => {
  res.render("venue-spaces");
});

module.exports = router;
