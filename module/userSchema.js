import mongoose from 'mongoose';

import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  user_name: String,
  email: String,
  mobile_numbar: Number,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
const user = mongoose.model('user', userSchema);
export default user;
