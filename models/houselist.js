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
        type: DataTypes.INTEGER,
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
      Kitchen: {
        type: DataTypes.BOOLEAN,

        defaultValue: false
      },
      HairDryer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      Pool: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      Grill: {
        type: DataTypes.BOOLEAN,

        defaultValue: false
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [1, 700]}
      },
      Price: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Pets: {
        type: DataTypes.BOOLEAN,
        // defaultValue is a flag that defaults a new todos complete value to false if
        // it isn't supplied one
        defaultValue: false
      },
    });
    return Houses;
  };
  