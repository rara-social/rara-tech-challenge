const userService = require("../services/user.service");

exports.signUp = async (req, res) => {
  const { email } = signUpDto;
  const user = await userService.getUsersByEmail(email);
  if (user)
    return res
      .status(httpStatus.CONFLICT)
      .json({ message: "Account already exists" });

  return await res.status(201).json(user);
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.getUsersByAddress(email);
    const isValidUser = user && userService.comparePw(password);

    if (!isValidUser) {
      return res.status(409).json({
        message: "Invalid email or password",
      });
    }

    // Login successful, write token, and send back user generated JWT
    const { accessToken } = userService.generateJWT();
    return res.status(200).json({ accessToken, id: user.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
