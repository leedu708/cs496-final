var Pets = require('../models/pets.js').Model;
var Avatars = require('../models/avatars.js').Model;

var selectAll = '_id avatar_id name color age animal';

exports.getAll = function(req, res) {
  Pets.find({}, selectAll).exec(function(err, collection) {
    res.json(collection);
  });
};

exports.getAllByAvatar = function(req, res) {
  var id = req.params.avatar_id;
  Pets.find({ avatar_id: id }, selectAll).exec(function(err, collection) {
    res.json(collection);
  });
};

exports.addPet = function(req, res) {
  var settings = {
    name: req.body.name,
    color: req.body.color,
    age: req.body.age,
    animal: req.body.animal,
    avatar_id: req.body.avatar_id
  }

  Pets.create(settings, function(err, pet) {
      Avatars.update({ _id: req.body.avatar_id }, { $push: { pets: pet._id } }, function(err, avatar) {
        res.json(pet);
      });
    });
};

exports.updatePet = function(req, res) {
  var id = req.params._id;

  var settings = {};

  if (req.body.name) { settings.name = req.body.name };
  if (req.body.color) { settings.color = req.body.color };
  if (req.body.age) { settings.age = req.body.age };
  if (req.body.animal) { settings.animal = req.body.animal };

  Pets.update({ _id: id }, { $set: settings }, function(err, pet) {
    res.json(pet);
  });
};

exports.deletePet = function(req, res) {
  var id = req.params._id;
  Pets.findOne( { _id: id }, function(err, pet) {
    pet.remove(function(err) {
      if (!err) {
        Avatars.update({ _id: pet.avatar_id }, { $pull: { pets: pet._id } }, function(err) {
          res.json(pet);
        });
      }
    });
  });
};
