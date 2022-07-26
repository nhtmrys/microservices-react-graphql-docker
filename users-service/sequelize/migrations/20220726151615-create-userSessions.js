module.exports.up = async (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "userSessions",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        references: {
          key: "id",
          model: "users",
        },
        type: DataTypes.UUID,
      },
      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
    }
  );
};
module.exports.down = (queryInterface) =>
  queryInterface.dropTable("userSessions");
