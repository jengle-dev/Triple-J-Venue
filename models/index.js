const User = require("./User");
const Space = require("./Space");
const Event = require("./Event");

User.hasMany(Event, {
  foreignKey: "requestor_id",
  onDelete: "CASCADE",
});

Event.belongsTo(User, {
  foreignKey: "requestor_id",
  onDelete: "CASCADE",
});

Space.hasMany(Event, {
  foreignKey: "space_id",
  onDelete: "CASCADE",
});

Event.belongsTo(Space, {
  foreignKey: "space_id",
});

module.exports = { Space, Event, User };
