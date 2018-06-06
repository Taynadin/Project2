module.exports = function(sequelize, DataTypes) {
    var Houses = sequelize.define("Houses", {
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [1, 240]}
      },
      City: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [1, 240]}
      },
      Postcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [5,5]}
      },
      Bedrooms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Bathrooms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      MaxGuests: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
      },
      Price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Houses;
  };
  