const Router = require("express");
const router = Router();
const getUserByEmail = require("./UsuarioController")

router.get("/:email", getUserByEmail)
module.exports = router;