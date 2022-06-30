const Router = require("express");
const { postMP } = require("./mercadopagoController");

const router = Router()

router.get('/', postMP);


module.exports = router;