const Router = require("express");
const { postMP } = require("./mercadopagoController");

const router = Router()

router.post('/', postMP);


module.exports = router;