const Router = require("express");
const { getDias, postDias, deleteDias } = require("./diaController");

const router = Router()

router.get('/:id', getDias);
router.post("/:id", postDias)
router.delete("/:id", deleteDias)
module.exports = router;