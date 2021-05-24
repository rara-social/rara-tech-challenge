var express = require("express");
var router = express.Router();
const UsersCtrl = require("./controllers/users.controller");
//
// GET - Leaderboard Data
//
// let testData = require("../testData.json");

router.get("/leaderboard", async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).send(users);
});

// get all users
router.get("/users", UsersCtrl.getAllUsers);

// create users
router.post("/users", UsersCtrl.createUser);

// get user by id
router.put("/users/:id", UsersCtrl.getUserById);

// delete user by id
router.delete("/users/:id", UsersCtrl.deleteUserById);

//
// DEFAULT (405)
//
router.get("*", async (req, res) => {
  res.status(405).send();
});

module.exports = router;
