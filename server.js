const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(require("./controllers/"));
// This line throws an error when I start server with it uncommented. Need to figure out how to get it to work so that we can use routes files in controllers folder

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
