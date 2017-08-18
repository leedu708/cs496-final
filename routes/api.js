var express = require('express');
var request = require('request');
var avatars = require('../controllers/avatars.js');
var pets = require('../controllers/pets.js');

var api = express.Router();

// avatar routes
api.get('/avatars', avatars.getAll);
api.get('/avatars/:_id', avatars.getById);
api.post('/avatars', avatars.addAvatar);
api.put('/avatars/:_id', avatars.updateAvatar);
api.delete('/avatars/:_id', avatars.deleteAvatar);

// pet routes
api.get('/pets', pets.getAll);
api.get('/avatars/:avatar_id/pets', pets.getAllByAvatar);
api.post('/pets', pets.addPet);
api.put('/pets/:_id', pets.updatePet);
api.delete('/pets/:_id', pets.deletePet);

module.exports = api;
