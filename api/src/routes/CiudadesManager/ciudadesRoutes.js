const { Ciudad } = require("../../db")
const Router = require("express");
const { getCiudades, getCiudadesByID } = require("./ciudadesController");

const router = Router()

router.get('/', getCiudades);
router.get('/:id', getCiudadesByID)

module.exports = router;