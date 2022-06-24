const { Ciudad } = require("../../db")
const Router = require("express");
const getCiudades = require("./ciudadesController");

const router = Router()

router.get('/', getCiudades);

module.exports = router;