var mongoose = require('mongoose');
var Avatars = require('../models/avatars.js').Model;
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: { type: String },
  color: { type: String },
  age: { type: Number },
  animal: { type: String },
  avatar_id: { type: Schema.Types.ObjectId, ref: 'Avatar' }
});

var Pets = mongoose.model('Pet', petSchema);
exports.Model = Pets;
