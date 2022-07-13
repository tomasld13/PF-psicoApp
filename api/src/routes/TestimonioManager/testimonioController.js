const { restart } = require("nodemon");
const {Testimonio} = require("../../db");


const postTestimonio = async (req, res) => {
    try {
        const idPaciente = req.user.id;//Esto viene del validador de JWT, que trae la información de quien hace la peticion. "Pablo";
        
        const { testimonio } = req.body;

        const testim = await Testimonio.create({
            testimonio,
            paciente: idPaciente
        });



        res.json(testim);
    } catch (error) {
        console.log(error);
    }
};
const getTestimonios = async (req,res)=>{
    try {
        const testimonios = await Testimonio.findAll();
        res.send(testimonios);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    postTestimonio,
    getTestimonios
}