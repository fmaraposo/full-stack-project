const mongoose = require('mongoose');´
const Card = require('../models/Card.js');
const DB_NAME = 'proverb';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 
