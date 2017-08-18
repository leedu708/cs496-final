var Pets = require('../models/pets.js').Model;

var selectAll = '_id user_id avatar_id name color age animal';

exports.getAll = function(req, res) {
  Pets.find({}, selectAll).exec(function(err, collection) {
    res.json(collection);
  });
};

exports.getUserPets = function(req, res) {
  var user_id = req.body.user_id;
  var filter = {
    user_id: user_id
  }

  Pets.find(filter, selectAll, function(err, pets) {
    res.json(pets);
  });
};

exports.addPet = function(req, res) {
  var settings = {
    user_id: req.body.user_id,
    name: req.body.name,
    color: req.body.color,
    age: req.body.age,
    animal: req.body.animal,
    avatar_id: req.body.avatar_id
  }

  Pets.create(settings, function(err, pet) {
    res.json(pet);
  });
};

exports.updatePet = function(req, res) {
  var id = req.body_id;

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
  var id = req.body_id;

  Pets.deleteOne( { _id: id }, function(err, pet) {
    res.json(pet);
  });
};
