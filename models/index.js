const User = require("./User");
const Space = require("./Space");
const Event = require("./Event");

Event.belongsTo(User, {
  foreignKey: "requestor_id",
  onDelete: "CASCADE",
});

Event.hasOne(Space, {
  foreignKey: "space_name",
  onDelete: "CASCADE",
});
