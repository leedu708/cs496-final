var express = require('express');
var request = require('request');
var avatars = require('../controllers/avatars.js');
var pets = require('../controllers/pets.js');

var api = express.Router();

// avatar routes
api.get('/avatars', avatars.getAll);
api.post('/avatars', avatars.addAvatar);
api.put('/avatars/:_id', avatars.updateAvatar);
api.delete('/avatars/:_id', avatars.deleteAvatar);

// pet routes
api.get('/pets', pets.getAll);
api.post('/pets', pets.addAvatar);
api.put('/pets/:_id', pets.updateAvatar);
api.delete('/pets/:_id', pets.deleteAvatar);

module.exports = api;
