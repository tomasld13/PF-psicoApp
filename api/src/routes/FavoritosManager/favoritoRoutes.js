const Router = require("express");
const { postFavoritoByPacienteID, deleteFavoritoByPacienteID, getFavoritosByPacienteID } = require("./favoritoController");

const router = Router()

router.post('/:id', postFavoritoByPacienteID); // http://localhost:3001/api/favoritos/15 por body {"pacienteID": 4}
router.delete('/:id', deleteFavoritoByPacienteID); // http://localhost:3001/api/favoritos/15 por body {"pacienteID": 4}
router.get('/:id', getFavoritosByPacienteID); //http://localhost:3001/api/favoritos/2 


module.exports = router;