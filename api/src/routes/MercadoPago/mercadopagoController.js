const { Factura } = require("../../db")
const server = require('express').Router();

//SDK de MercadoPago
const mercadopago = require('mercadopago');
const {ACCESS_TOKEN} = process.env;
require("dotenv").config();

mercadopago.configure({
    access_token: ACCESS_TOKEN
})

//ruta que genera la URL a mercado pago
const postMP = async (req, res) => {
    try {
    // const data = req.body;
    // const items = [ 
    //     {servicio: data.servicio, precio: data.precio, quantity: 1}, 
    // ]
    const id_orden = 1;
       const items = [
        {servicio: "Sesion personal", precio: 1500, quantity: 1},
       ] 
    const items_md = items.map(item => ({
        title: item.servicio,
        quantity: item.quantity,
        unit_price: item.precio,
    }))
    let preference = {
        items: items_md,
        back_urls: {
            success: "https://www.mercadopago.com",
            failure: "https://www.mercadopago.com",
            pending: "https://www.mercadopago.com"
        },
        auto_return: "approved",
        payment_methods: {
            excluded_payment_methods: [
                {
                    id: "atm"
                }
            ],
        },
        external_reference:`${id_orden}`,
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

    mercadopago.preferences.create(preference)
    .then(function (response) {
        console.log("respondio");
        global.id = response.body.id;
        console.log(response.body);
        res.json({id: global.id});
    })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    postMP
}
