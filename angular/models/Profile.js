const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  address:{
    street_address:{
      type: String,
      required: true
    },
    apartment_unit_floor_suite_building:{
      type: String
    },
    city:{
      type: String,
      required: true
    },
    state_province_region:{
      type: String,
      required: true
    },
    zip_code:{
      type: Number,
      required: true
    },
    country:{
      type: String,
      required: true
    },
    security_access_code:{
      type: Number
    }
  },
  phone_number:{
    type: Number,
    required: true
  }
});

const Profile = module.exports = mongoose.model('Profile', profileSchema);

exports.Profile = Profile;
