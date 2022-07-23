module.exports.up = (queryInterface, dataTypes) => {
  return queryInterface.createTable(
    "listings",
    {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: dataTypes.DATE,
        allowNull: true,
      },
    },
    { charset: "utf8" }
  );
};
