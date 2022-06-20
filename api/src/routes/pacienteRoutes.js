const { Paciente } = require("../db")
const Router = require("express")

const router = Router()

router.get('/', (req, res, next) => {
    Paciente.findAll()
     .then((users) => {
      res.send(users);
     })
     .catch((error) => next(error));
   });
   
router.post('/', (req, res, next) => {
 const user = req.body;
 Paciente.create(user)
  .then((createdUser) => {
   res.send(createdUser);
  })
  .catch((error) => next(error));
});

module.exports = router;