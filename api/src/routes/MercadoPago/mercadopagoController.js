const { Factura, Paciente, MetodoPago, Psicologo, Dia, Horarios, Usuario } = require("../../db")
const server = require('express').Router();

//SDK de MercadoPago
const mercadopago = require('mercadopago');
const e = require("express");
const {ACCESS_TOKEN} = process.env;
require("dotenv").config();

mercadopago.configure({
    access_token: ACCESS_TOKEN
})

//ruta que genera la URL a mercado pago
const postMP = async (req, res) => {
    const data = req.body;
    const items = [ 
        {servicio: data.servicio, precio: data.precio, quantity: 1}, 
    ]
    const external_reference = data.id + "*" + data.hora + "*" + data.fecha + "*" + data.psicoId;
    const items_md = items.map(item => ({
        title: item.servicio,
        quantity: item.quantity,
        unit_price: item.precio,
    }))
    let preference = {
        items: items_md,
        back_urls: {
            success: "http://localhost:3001/api/mercadopago/pagos",
            failure: "http://localhost:3001/api/mercadopago/pagos",
            pending: "http://localhost:3001/api/mercadopago/pagos"
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

    // if (Array.isArray(data)) {
    //     for (let i = 0; i < data.length; i++) {
    //         preference.items.push({
    //         servicio: data.servicio,
    //         precio: data.precio
    //     });
    //     }
    // } else {
    //     preference.items.push({
    //     title: data.servicio,
    //     picture_url: data.precio,
    //     });
    // }
    const paciente = await Usuario.findByPk(Number(data.id));
    mercadopago.preferences.create(preference)
    .then(function (response) {
        console.log("respondio");
        global.id = response.body.init_point;
        // console.log(response.body);
        console.log(paciente)
        res.json({id: global.id});
    }).catch(error =>{
        console.log(error);
        res.status(400).send({error: error});
    })
}

const getPago = (req, res) => {
    const { id } = req.params;
    mercadopago.preferences.get(id)
    .then(function (response) {
        console.log(response.body);
        res.json(response.body);
    }).catch(error =>{
        console.log(error);
        res.status(400).send({error: error});
    }
    )
}

//ruta que recibe la informacion del pago
const getPayments = async (req, res) => {
    try {
         // console.log("EN LA RUTA PAGOS", req)
    const payment_id = req.query.payment_id;
    const payment_status = req.query.status;
    const merchant_order_id = req.query.merchant_order_id;
    const external_reference = req.query.external_reference;
    const [id, hora, fecha, psicoId] = external_reference.split("*")
    const factura = await Factura.create({
            payment_id: payment_id,
            payment_status: payment_status,
            merchant_order_id: merchant_order_id,
            status: "paid"})
    const psicologo = await Psicologo.findByPk(Number(psicoId))
    const dia = await Dia.findOne({where:{fecha:fecha}})
    const horario = await Horarios.create({hora:hora})
    const paciente = await Paciente.findByPk(Number(id));
    horario.setPaciente(paciente)
    horario.setPsicologo(psicologo)
    dia.addHorarios(horario)
    psicologo.addDia(dia)
    paciente.setFacturas(factura);
    const metodoPago = await MetodoPago.findByPk(1);
    factura.setMetodoPago(metodoPago);
            console.info("redirect success");
            res.redirect("http://localhost:3000");
    } catch (error) {
        console.error("error al actualizar la factura", error);
        return res.redirect(`http://localhost:3000/?error${error}&where=al+buscar`);
    }
}

module.exports = {
    postMP,
    getPayments
}
