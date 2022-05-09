const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const PostSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
    },
   email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
   phone: {
    type: Number,
    required: true,
  },
   membershipDate: {
    type: Date,
    required: true,
  },
   level: {
    type: Number, 
    min: 1, 
    max: 10
  }

});

module.exports = mongoose.model('Posts', PostSchema);