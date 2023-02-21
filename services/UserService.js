const User = require("../models/user");

const getAllUsuarios = async () => {
  const data = await User.find();
  return data;
};

const createUsuario = async (data) => {
  const user = new User(data);
  const newUser = await user.save();
  return newUser;
};

module.exports = { getAllUsuarios, createUsuario };
