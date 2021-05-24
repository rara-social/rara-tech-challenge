const db = require("../../config/config.firebase");
const jwt = require("jsonwebtoken");

const userDb = db.collection("users");

const userService = {
  createUser: async (userDto) => {
    try {
      const user = { ...userDto, id: userDto.publicAddress };
      await userDb.doc(userDto.publicAddress).set(user);
      return user;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },

  getUsersByAddress: async (address) => {
    try {
      const user = await userDb.where("publicAddress", "==", address).get();
      return user.exists ? user.data() : null;
    } catch (error) {
      console.error(error);
    }
    return [];
  },
  getUsersByName: async (name) => {
    try {
      const user = await userDb.where("name", "==", name).get();
      return user.exists ? user.data() : null;
    } catch (error) {
      console.error(error);
    }
    return [];
  },
  getUsersByEmail: async (email) => {
    try {
      const user = await userDb.where("email", "==", email).get();
      return user.exists ? user.data() : null;
    } catch (error) {
      console.error(error);
    }
    return [];
  },
  getAllUsers: async (query) => {
    try {
      const users = await userDb.get();
      return users.docs.map((doc) => doc.data());
    } catch (error) {
      console.error(error);
    }
    return [];
  },
  updateUser: async (userDto) => {
    try {
      await userDb.doc(userDto.publicAddress).update(userDto);
      return userDto;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  deleteUser: async (publicAddress) => {
    try {
      await userDb.doc(publicAddress).delete();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  generateJWT: (user) => {
    const payload = {
      userId: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
    };
    const expiresIn = 60 * 60 * 24; // expires in 24 hours
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn,
    });
    return { accessToken, expiresIn };
  },
  comparePw: (plainPw) => {},
};

module.exports = userService;
