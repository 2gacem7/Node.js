const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.ATLAS_URI;

const connectDatabase = async ()=> {
  try {
    await mongoose.connect(uri);
    console.log('MongoDb connected ...');
  } 
  catch(err) {
    console.error(err.message);
    process.exit(1);
  }
}
module.exports = connectDatabase;