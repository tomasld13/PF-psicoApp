const Router = require("express");
const { getMP } = require("./mercadopagoController");

const router = Router()

router.get('/', getMP);


module.exports = router;