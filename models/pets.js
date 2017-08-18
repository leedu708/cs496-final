var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  user_id: { type: String },
  name: { type: String },
  color: { type: String },
  age: { type: Number },
  animal: { type: String },
  avatar_id: { type: Schema.Types.ObjectId, ref: 'Avatar' }
})

var Pets = mongoose.model('Pet', petSchema);
exports.Model = Pets;
