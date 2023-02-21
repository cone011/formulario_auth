const express = require("express");
const app = express();

const {
  getAllUsuarios,
  createUsuario,
} = require("./controllers/UserController");

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", getAllUsuarios);
app.get("/register", async (req, res) => res.render("register"));
app.post("/register", createUsuario);

app.listen(3000, () => console.log("Listening on port 3000!"));
