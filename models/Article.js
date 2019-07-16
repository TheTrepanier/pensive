const mongoose = require("mongoose");


// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    validate: {
      validator: function (check, cb) {
        Article.findOne({link: check}, function (err, article) {
          if (err) throw err;
          if (article) return cb(false);
          cb(true);
        });
      }
    },
    required: true
  },
  author: {
      type: String,
      required: true
  },
  teaser: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
