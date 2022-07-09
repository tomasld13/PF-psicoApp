const Router = require('express');
const validarCampos = require('../../middlewares/validar-campos');
const router = Router();
const {esAdminRol} = require('../../middlewares/validarAdmin');
const { postNewsletter } = require('./NewsletterController');


router.post('/',postNewsletter);




module.exports = router;