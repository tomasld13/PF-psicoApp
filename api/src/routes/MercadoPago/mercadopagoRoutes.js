const Router = require("express");
const { postMP, getPayments } = require("./mercadopagoController");

const router = Router()

router.post('/', postMP);
router.get('/pagos', getPayments);


module.exports = router;