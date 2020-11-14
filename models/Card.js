const mongoose = require('mongoose');
const {Schema, model} = mongoose; 
  const cardSchema = new Schema ( 
    {
      phrase:  String,
      translation: String,
      meaning: String
    }
  )

module.exports = model('Card', cardSchema);