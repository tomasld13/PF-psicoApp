const Router = require("express");
const getGanancias = require("./gananciasController");

const router = Router()
console.log("hhhh")
router.get('/:fecha', getGanancias);

module.exports = router;