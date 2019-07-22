const mongoose = require("mongoose");


// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const PostSchema = new Schema({
  postTitle: {
    type: String,
    required: true
  },
  postBody: {
    type: String,
    required: true,
    maxlength: 3
  },
  author: {
      type: String,
      required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
let Post = mongoose.model("Post", PostSchema);

// Export the Article model
module.exports = Post;
