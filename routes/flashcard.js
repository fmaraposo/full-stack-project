const express = require('express');
const router = express.Router();

router.get('/flashcard', (req,res) => {
  res.render('flashcards')
});

module.exports = router;