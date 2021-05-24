var express = require("express");
var router = express.Router();

//
// GET - Leaderboard Data
//
let testData = require("../testData.json");
router.get("/leaderboard", (req, res) => {
  return res.status(200).send(testData);
});
router.get("/profile", (req, res) => {
  //placeholder function to handle requests for a specific user's profile
  return res.status(200).send(testData.filter((u) => u.id === req.query.id)[0]);
});

//
// DEFAULT (405)
//
router.get("*", async (req, res) => {
  res.status(405).send();
});

module.exports = router;
