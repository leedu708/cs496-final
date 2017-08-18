var Avatars = require('../models/avatars.js').Model;

var selectAll = '_id user_id name hairColor age weight height pets';

exports.getAll = function(req, res) {
  Avatars.find({}, selectAll).exec(function(err, collection) {
    res.json(collection);
  });
};

exports.getById = function(req, res) {
  var id = req.params._id;
  Avatars.findOne({ _id: id }, selectAll, function(err, avatar) {
    res.json(avatar);
  });
};

exports.addAvatar = function(req, res) {
  var settings = {
    name: req.body.name,
    hairColor: req.body.hairColor,
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height
  }

  Avatars.create(settings, function(err, avatar) {
    res.json(avatar);
  });
};

exports.updateAvatar = function(req, res) {
  var id = req.params._id;

  var settings = {};

  if (req.body.name) { settings.name = req.body.name };
  if (req.body.hairColor) { settings.hairColor = req.body.hairColor };
  if (req.body.age) { settings.age = req.body.age };
  if (req.body.weight) { settings.weight = req.body.weight };
  if (req.body.height) { settings.height = req.body.height };

  Avatars.update({ _id: id }, { $set: settings }, function(err, avatar) {
    res.json(avatar);
  });
};

exports.deleteAvatar = function(req, res) {
  var id = req.params._id;
  Avatars.findOne( { _id: id }, function(err, avatar) {
    avatar.remove();
    res.json(avatar);
  });
};
