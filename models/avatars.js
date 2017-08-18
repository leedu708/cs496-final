var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var avatarSchema = new Schema({
  user_id: { type: String },
  name: { type: String },
  hairColor: { type: String },
  age: { type: Number },
  weight: { type: Number },
  height: { type: Number },
  pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }]
});

var Avatars = mongoose.model('Avatar', avatarSchema);
exports.Model = Avatars;
