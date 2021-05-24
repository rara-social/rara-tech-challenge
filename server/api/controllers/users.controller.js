const userService = require("../services/user.service");
// get all users
exports.getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers(req.query);

  return res.status(200).send(result);
};

// create users
exports.createUser = async (req, res) => {
  const result = await userService.createUser(req.body);

  return res.status(200).send(result);
};

// get user by id
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  req.body.id = id;

  const user = await userService.updateUser(req.body);
  return res.status(200).send(user);
};

// delete user by id
exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  return res.status(200).send();
};
