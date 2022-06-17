const { Patient } = require("../db")
const Router = require("express")

const router = Router()

router.get('/', (req, res, next) => {
    Patient.findAll()
     .then((users) => {
      res.send(users);
     })
     .catch((error) => next(error));
   });
   
router.post('/', (req, res, next) => {
 const user = req.body;
 Patient.create(user)
  .then((createdUser) => {
   res.send(createdUser);
  })
  .catch((error) => next(error));
});

module.exports = router;