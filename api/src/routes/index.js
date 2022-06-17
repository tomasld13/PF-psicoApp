const Router = require("express")
const doctorRoutes = require("./doctorRoutes")
const patientRoutes = require("./patientRoutes")
const router = Router();

router.use('/doctor', doctorRoutes);
router.use('/patient', patientRoutes);

module.exports = router;