const Router = require("express");
const { postFavoritoByPacienteID, deleteFavoritoByPacienteID, getFavoritosByPacienteID } = require("./favoritoController");

const router = Router()

router.post('/:id', postFavoritoByPacienteID);
router.delete('/:id', deleteFavoritoByPacienteID);
router.get('/:id', getFavoritosByPacienteID);


module.exports = router;