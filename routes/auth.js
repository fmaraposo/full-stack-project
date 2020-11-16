const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRound = 10; //nivel de encriptação da password
const User = require('../models/User');

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  const {username, email, password} = req.body;
  const salt = bcrypt.genSaltSync(saltRound);
  const hashPassword = bcrypt.hashSync(password, salt);
  if(username === '' || password === '') {
      res.render('auth/signup', {
          errorMessage: 'Please check username and password'
      });
      return;
  }
  User.findOne({'username' : username})
  .then((user) => {
      if(user) {
          res.render('auth/signup', {
              errorMessage: 'This username is already taken'
          }); 
          return;
      }
  
  User.create({ username, email, password: hashPassword})
  .then(() => {
      res.redirect('/');
  })
  .catch((error) => {
    res.render('auth/signup', {
        errorMessage : 'Invalid credentials'
        });
      });
    });
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', (req, res) => {
  const {username, password} = req.body;

  if(!username || !password) {
      res.render('auth/login', {
          errorMessage: 'Please insert username and password'
      });
      return;
  }
  User.findOne({'username' : username})
  .then((user) => {
      if(!user) {
          res.render('auth/login', {
              errorMessage: 'Invalid login'
          });
          return;
      }
      if(bcrypt.compareSync(password, user.password)) {
          req.session.currentUser = user;
          res.redirect('/');
      }  else {
          res.render('auth/login', {
              errorMessage: 'Invalid login'
          });
        }
    });
});

router.post('/logout', (req, res) => {
  req.session.destroy();
});

module.exports = router;