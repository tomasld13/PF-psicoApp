
const { Newsletter, Suscriptor } = require('../../db');
const { response } = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');

//Creamos el tranportador
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD_ENV
    },
    port: 465,
    host: 'smpt.gmail.com'
});


const postNewsletter = async (req, res) => {
    try {
        const { newsletter } = req.body;
        const news = await Newsletter.create({
            newsletter
        });
        const Suscriptores = await Suscriptor.findAll();
        Suscriptores.map(async (suscriptor) => {
            //enviamos el mail de confirmacion.
            let info = await transporter.sendMail({
                from: `${process.env.EMAIL}`, // sender address
                to: `${suscriptor.mail}`, // list of receivers
                subject: "Welcome to Psico Health ✔", // Subject line
                text: "Welcome to PsicoHealth. Here you'll find a way to realease your soul.", // plain text body
                html: `<a src=${news.newsletter}>this is the last newsletter of psicoapp</a>`, // html body
            });
            return info;
        })
        res.send([news]);
    } catch (error) {
        console.log(error);
    }

};


module.exports = {
    postNewsletter
}