const Router = require("express");
const {getProvincias, getProvinciasByID} = require("./provinciasController");

const router = Router()

router.get('/', getProvincias);
router.get('/:id', getProvinciasByID)
module.exports = router;