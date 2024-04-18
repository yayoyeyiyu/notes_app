const Note = require("./Note");
const User = require("./User");

Note.belongsTo(User)
User.hasMany(Note)

