const Router = require("express");
const { getPsicologo, postPsicologo, getOnePsicologoAndUsers } = require("./psicologoController");

const router = Router()

router.get('/', getPsicologo);
router.post('/', postPsicologo);
router.get('/:id', getOnePsicologoAndUsers);

module.exports = router;