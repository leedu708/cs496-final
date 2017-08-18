var mongoose = require('mongoose');
var Pets = require('../models/pets.js').Model;
var Schema = mongoose.Schema;

var avatarSchema = new Schema({
  name: { type: String },
  hairColor: { type: String },
  age: { type: Number },
  weight: { type: Number },
  height: { type: Number },
  pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }]
});

avatarSchema.pre('remove', function(next) {
  var avatar = this;
  Pets.remove({ avatar_id: avatar._id }).exec();
  next();
});

var Avatars = mongoose.model('Avatar', avatarSchema);
exports.Model = Avatars;
