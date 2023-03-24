const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    space_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "space",
        key: "id",
      },
    },
    requestor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pending",
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
