const express = require('express');
const router  = express.Router();
const Card = require('../models/Card');
const Like = require('../models/Like');
const googleTTS = require('google-tts-api');

function requiredLogin(req, res, next) {
  if(req.session.currentUser) {
      next();
  } else {
      res.redirect('/login');
  }
}

router.get('/myarea', requiredLogin, (req, res, next) => {
  let userId = req.session.currentUser._id;
  Like.find({ user: userId })
    .populate('card')
    .then((foundLikes) => {
    res.render('my-area', { foundLikes: foundLikes});
  });

 
});

router.get('/main', requiredLogin, (req, res, next) => {
  req.app.locals.loggedUser = req.session.currentUser;
  Card.find()
  .then((allCardsFromDB) => {
    res.render('main', {cards: allCardsFromDB});
  });
});

router.post('/main/:cardId', (req, res) => {
  let userId = req.session.currentUser._id;
  let cardId = req.params.cardId;
  Like.create({
    user: userId,
    card: cardId
  }).then(() => {
    res.redirect('/main');
  });
});


router.get('/create', requiredLogin, (req, res, next) => {
  req.app.locals.loggedUser = req.session.currentUser;
 res.render('create');
});

router.post('/create', requiredLogin, (req, res, next) => {
  req.app.locals.loggedUser = req.session.currentUser;
  let {phrase, translation, meaning} = req.body;
  let urleng = "";
  let urlpt = "";
  googleTTS(`${phrase}`, 'en', 1)
  .then((url) => {
    urleng = url;
    return googleTTS(`${phrase}`, 'pt', 1)
    .then((url2) => {
      urlpt = url2;
      return Card.create({
        phrase,
        translation,
        meaning,
        urleng,
        urlpt
      }). then(() => {
        res.render('create');
      });
    });
    });
  });
  



module.exports = router;