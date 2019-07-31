const db = require("../models");

module.exports = {
  findAllPosts: function(req, res) {
    db.UserPosts.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPostByUser: function(req, res) {
    //console.log(req.body, " ");
    console.log("blah", req.user);

    db.UserPosts.find({ author: req.user.name }) //TODO: update this shit
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUser: function(req, res) {
    return req.user;
  },
  create: function(req, res) {
    var data = { ...req.body };
    data.author = req.user.name;
    db.UserPosts.create(data)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.UserPosts.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
