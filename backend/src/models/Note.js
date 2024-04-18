const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Note = sequelize.define('note', {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  archive : {
    type: DataTypes.BOOLEAN,
    allowNull: false 
  }

});

module.exports = Note;