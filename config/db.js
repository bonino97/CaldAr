const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database: CaldAr ~ Online`);
  })
  .catch((e) => {
    console.error(e);
  });

// Import Models Here.

const boiler = require('../models/boiler');
const building = require('../models/building');
const user = require('../models/user');
