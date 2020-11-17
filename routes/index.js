const express = require('express');
const router  = express.Router();
const Card = require('../models/Card');



/* GET home page */
router.get('/', (req, res, next) => {
  req.app.locals.loggedUser = req.session.currentUser;
  res.render('index', {user: req.session.currentUser});
});


router.get('/index', (req, res) => {
  res.render('index');
});

router.get('/contacts', (req, res, next) => {
  res.render('contacts');
});



module.exports = router;

