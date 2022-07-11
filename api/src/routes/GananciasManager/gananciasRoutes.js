const Router = require("express");
const getGanancias = require("./gananciasController");

const router = Router()

router.get('/:fecha', getGanancias);

module.exports = router;