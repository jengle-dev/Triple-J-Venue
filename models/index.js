const User = require("./User");
const Space = require("./Space");
const Event = require("./Event");

Event.belongsTo(User, {
  foreignKey: "requestor_id",
  onDelete: "CASCADE",
});

Space.hasMany(Event, {
  foreignKey: "space_id",
  onDelete: "CASCADE",
});

module.exports = { Space, Event };
