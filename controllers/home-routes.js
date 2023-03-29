const router = require("express").Router();

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
  res.render("calendar");
});

router.get("/about-us", async (req, res) => {
  res.render("about-us");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
