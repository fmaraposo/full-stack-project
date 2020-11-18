const mongoose = require('mongoose');
const {Schema, model} = mongoose; 
  
const cardSchema = new Schema ( 
    {
      phrase:  String,
      translation: String,
      meaning: String,
      phraseAudioEng: String,
      translationAudioPt: String,
      meaningAudioEng: String
    }, 
    {
      timestamps: true  //created and updated at....
    }
    
  );

module.exports = model('Proverb', cardSchema);