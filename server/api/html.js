var express = require('express');
var router = express.Router();

// serve the frontend for all non-api requests
router.get('*', function (req, res) {
  try {
    return res.sendFile('index.html', { root: './build' });
  } catch (error) {
    return res.status(500).send({});
  }
});
module.exports = router;
