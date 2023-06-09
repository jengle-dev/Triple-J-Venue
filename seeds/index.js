const sequelize = require("../config/connection");
const User = require("../models/User");
const userData = require("./user-seeds.json");
const Space = require("../models/Space");
const spaceData = require("./space-seeds.json");
const Event = require("../models/Event");
const eventData = require("./event-seeds.json");
const bcrypt = require("bcrypt");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const spaces = await Space.bulkCreate(spaceData, {
    individualHooks: true,
    returning: true,
  });

  const users = [];
  for (const user of userData) {
    console.log(user.password);
    const passwordHashed = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({
      ...user,
      password: passwordHashed,
    });
    users.push(newUser);
  }

  for (const event of eventData) {
    const newEvent = await Event.create({
      ...event,
      space_id: spaces[Math.floor(Math.random() * spaces.length)].id,
      requestor_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
