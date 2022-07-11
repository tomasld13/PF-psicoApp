const { Factura, Paciente, MetodoPago, Psicologo, Dia, Horarios, Usuario } = require("../../db")

const {URL_BACK, URL_FRONT} = process.env;

const server = require('express').Router();

//SDK de MercadoPago
const mercadopago = require('mercadopago');
const e = require("express");
const { ACCESS_TOKEN } = process.env;
require("dotenv").config();

mercadopago.configure({
    access_token: ACCESS_TOKEN
})
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


//ruta que genera la URL a mercado pago
const postMP = async (req, res) => {
    const data = req.body.body;
    const psicoId = data.psicoId.id;
    const items = [
        { servicio: data.servicio, precio: data.precio, quantity: 1 },
    ]
    const external_reference = data.id + "*" + data.hora + "*" + data.fecha + "*" + psicoId + "*" + data.email + "*" + data.precio;
    const items_md = items.map(item => ({
        title: item.servicio,
        quantity: item.quantity,
        unit_price: item.precio,
    }))
    let preference = {
        items: items_md,
        back_urls: {
            success: `${URL_BACK === "localhost" ? "http://localhost:3001" : URL_BACK}/api/mercadopago/pagos`,
            failure: `${URL_BACK === "localhost" ? "http://localhost:3001" : URL_BACK}/api/mercadopago/pagos`,
            pending: `${URL_BACK === "localhost" ? "http://localhost:3001" : URL_BACK}/api/mercadopago/pagos`
        },
        auto_return: "approved",
        payment_methods: {
            excluded_payment_methods: [
                {
                    id: "atm"
                }
            ],
        },
        external_reference: external_reference,
        installments: 3,
        statement_descriptor: "Test",
        shipments: {
            mode: "not_specified",
            cost: 0
        }
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            console.log("respondio");
            global.id = response.body.init_point;
            console.log(response.body);
            res.json({ id: global.id });
        }).catch(error => {
            console.log(error);
            res.status(400).send({ error: error });
        })
}

//ruta que recibe la informacion del pago
const getPayments = async (req, res) => {
    try {
        // console.log("EN LA RUTA PAGOS", req)
        const payment_id = req.query.payment_id;
        const payment_status = req.query.status;
        const merchant_order_id = req.query.merchant_order_id;
        const external_reference = req.query.external_reference;
        const [id, hora, fecha, psicoId, email, precio] = external_reference.split("*")
        const factura = await Factura.create({
            payment_id: payment_id,
            payment_status: payment_status,
            merchant_order_id: merchant_order_id,
            status: "paid",
            fecha: fecha,
            precio: parseInt(precio)
        })
        const psicologo = await Psicologo.findByPk(Number(psicoId))
        const dia = await Dia.findOne({ where: { fecha: fecha } })
        const horario = await Horarios.create({ hora: hora })
        const usuario = await Usuario.findByPk(Number(id), { include: { model: Paciente } });
        const paciente = await Paciente.findByPk(usuario.paciente.id)

        horario.setPaciente(paciente)
        horario.setPsicologo(psicologo)
        dia.addHorarios(horario)
        psicologo.addDia(dia)
        const metodoPago = await MetodoPago.findByPk(1);
        factura.setMetodoPago(metodoPago);
        await paciente.addFacturas(factura);
        await psicologo.addFacturas(factura)
        const pacienteExistente = psicologo.pacientesAtendidos.find(el => el === usuario.paciente.id)
        console.log("PACIENTE EXISTENTE", pacienteExistente)
        if(!pacienteExistente){
            psicologo.update({
                pacientesAtendidos:[...psicologo.pacientesAtendidos, usuario.paciente.id]
            })
        }else{
            console.log("El paciente ya fue atendido")
        }
       

        let info = await transporter.sendMail({
            from: `${process.env.EMAIL}`, // sender address
            to: email, // list of receivers
            subject: "Turno de atención psicológica ✔", // Subject line
            text: `Usted ha agendado un turno la fecha ${fecha} a la hora ${hora}`, // plain text body
            html: `Usted ha agendado un turno la fecha ${fecha} a la hora ${hora}`, // html body
        });
        console.log(info);
        
        console.info("redirect success");
        res.redirect(`${URL_FRONT}`);
    } catch (error) {
        console.error("error al actualizar la factura", error);
        return res.redirect(`${URL_FRONT}?error${error}&where=al+buscar`);
    }
}

module.exports = {
    postMP,
    getPayments
}
