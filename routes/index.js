const express = require('express');
const router  = express.Router();
const Card = require('../models/Card');

function requiredLogin(req, res, next) {
  if(req.session.currentUser) {
      next();
  } else {
      res.redirect('/login');
  }
}

/* GET home page */
router.get('/', (req, res, next) => {
  req.app.locals.loggedUser = req.session.currentUser;
  res.render('index', {user: req.session.currentUser});
});


/* router.get('/main', requiredLogin, (req, res, next) => {
  res.render('main');
}); */

router.get('/index', (req, res) => {
  res.render('index');
});

router.get('/private', requiredLogin, (req, res, next) => {
  res.render('private');
});

router.get('/main', requiredLogin, (req, res, next) => {
  Card.find()
  .then((allCardsFromDB) => {
    res.render('main', {cards: allCardsFromDB});
  });
});
 

module.exports = router;

