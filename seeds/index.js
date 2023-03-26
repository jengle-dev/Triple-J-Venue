const sequelize = require("../config/connection");
const User = require("../models/User");
const userData = require("./user-seeds.json");
const Space = require("../models/Space");
const spaceData = require("./space-seeds.json");
const Event = require("../models/Event");
const eventData = require("./event-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Space.bulkCreate(spaceData, {
    individualHooks: true,
    returning: true,
  });
  await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
