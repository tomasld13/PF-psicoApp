const { Factura } = require("../../db")
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
const postMP = (req, res) => {
    const data = req.body;
    const items = [ 
        {servicio: data.servicio, precio: data.precio, quantity: 1}, 
    ]
    const id_orden = 1;
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
        global.id = response.body.init_point;
        console.log(response.body);
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
const getPayments = (req, res) => {
    console.log("EN LA RUTA PAGOS", req)
    const payment_id = req.query.payment_id;
    const payment_status = req.query.status;
    const external_reference = req.query.external_reference;
    const merchant_order_id = req.query.merchant_order_id;
    console.log("EXTERNAL REFERENCE", external_reference);

    
    //Aqui edito el status de mi factura
    // Factura.findByPk(external_reference)
    // .then((factura) => {
    //     factura.payment_id = payment_id;
    //     factura.payment_status = payment_status;
    //     factura.merchant_order_id = merchant_order_id;
    //     factura.status = "paid";
    //     console.info("Factura actualizada");
    //     factura.save()
        Factura.create({
            payment_id: payment_id,
            payment_status: payment_status,
            merchant_order_id: merchant_order_id,
            status: "paid"
        })
        .then((_) => {
            console.info("redirect success")
            res.redirect("http://localhost:3000");
    }).catch((error) => {
        console.error("error al actualizar la factura", error);
        return res.redirect(`http://localhost:3000/?error${error}&where=al+buscar`);
    })

// }).catch((error) => {
//     console.error("error al buscar la factura", error);
//     return res.redirect(`http://localhost:3000/?error${error}&where=al+buscar`);
// })

}

module.exports = {
    postMP,
    getPayments
}
