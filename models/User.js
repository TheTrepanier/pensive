const mongoose = require("mongoose");
const uniqueMongoose = require("mongoose-unique-validator");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  givenName: {
      type: String
  },
  auth0ID: {
      type: String,
      unique: true
  },
  userImage: {
      type: String
  },
  userRole: {
    type: String
  }
});

UserSchema.plugin(uniqueMongoose);

// This creates our model from the above schema, using mongoose's model method
let User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
