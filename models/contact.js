module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
      Name: {
        type: DataTypes.STRING,
      },
      Email: {
        type: DataTypes.STRING,
      },
      Subject: {
        type: DataTypes.STRING,
      },
      Message: {
        type: DataTypes.STRING,
      }
    });
    return Contact;
  };
  
