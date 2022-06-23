const Router = require("express");
const { getPsicologo, postPsicologo } = require("./psicologoController");

const router = Router()

router.get('/', getPsicologo);
router.post('/', postPsicologo);

module.exports = router;