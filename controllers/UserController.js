const UserService = require("../services/UserService");

const getAllUsuarios = async (req, res) => {
  try {
    const data = await UserService.getAllUsuarios();
    res.render("index", { list: data });
  } catch (error) {
    res.render("index", { list: [] });
    res.status(500).json(error?.message).end();
  }
};

const createUsuario = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const data = UserService.createUsuario({ name, email, password });
    data && res.redirect("/");
  } catch (error) {
    res.status(500).json(error?.message).end();
  }
};

module.exports = { getAllUsuarios, createUsuario };
