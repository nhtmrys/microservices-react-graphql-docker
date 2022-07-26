import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Listing extends Model {}
Listing.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "listings",
    sequelize,
  }
);
