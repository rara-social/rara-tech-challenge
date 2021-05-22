var express = require('express');
var router = express.Router();

//
// GET - Leaderboard Data
//
let testData = require('../testData.json');
router.get('/leaderboard', (req, res) => {
  return res.status(200).send(testData);
});

//
// DEFAULT (405)
//
router.get('*', async (req, res) => {
  res.status(405).send();
});

module.exports = router;
