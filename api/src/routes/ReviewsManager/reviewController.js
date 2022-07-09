
const {Reviews, Usuario, Paciente} = require('../../db')
const getReviews = async (req,res)=>{
    const reviews = await Reviews.findAll();
    res.send(reviews);
}



const postReview = async (req,res)=>{
    const {rating, comment} = req.body;
    const {idPsicologo} = req.params;
    const idUser = req.user.id;
    const paciente = await Usuario.findByPk(idUser, {
        include : {
            model : Paciente
        }
    });

    const rev = await Reviews.create({
        rating,
        comment,
        pacienteId : paciente.paciente.id,
        psicologoId : idPsicologo
    });



    res.json(rev);

}
module.exports = {
    getReviews,
    postReview
}