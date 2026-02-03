const { sequelize } = require("../config/db");

const User = require("./User")(sequelize);
const Task = require("./Task")(sequelize);

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

const syncDB = async () => {
  await sequelize.sync();
};

module.exports = { User, Task, syncDB };
