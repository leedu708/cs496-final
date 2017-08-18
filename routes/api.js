var express = require('express');
var request = require('request');
var avatars = require('../controllers/avatars.js');

var api = express.Router();

// api routes go here
api.get('/avatars', avatars.getAll);
api.post('/avatars', avatars.addAvatar);
api.put('/avatars', avatars.updateAvatar);
api.delete('/avatars', avatars.deleteAvatar);

module.exports = api;
