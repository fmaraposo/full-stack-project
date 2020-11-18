const express = require('express');
const router  = express.Router();
const Card = require('../models/Card');
const googleTTS = require('google-tts-api');
const { createIndexes } = require('../models/Card');



/* GET home page */
router.get('/', (req, res, next) => {
  req.app.locals.loggedUser = req.session.currentUser;
  res.render('index', {user: req.session.currentUser});
});

router.get('/index', (req,res) => {
  res.render('index');
});

/* router.post('/:cardId', (req,res,next) => {
  let cardId = req.params.cardId;
  Card.find(cardId)
  .then((card) => {
    googleTTS(`${card.phrase}`, 'en', 1);
    console.log(url);
  })
  .catch((err) => {
    console.error(err.stack);
  });
}); */

router.get('/contacts', (req, res, next) => {
  res.render('contacts');
});



module.exports = router;

