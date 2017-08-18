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

// petSchema.pre('remove', function(next) {
//   var pet = this;
//   Avatars.update({ _id: pet.avatar_id }, { $pull: { pets: pet._id } }).exec();
//   next();
// });

var Pets = mongoose.model('Pet', petSchema);
exports.Model = Pets;
