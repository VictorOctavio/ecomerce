//Import mercado pago and r
const mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: process.env.APP_USER_MERCADOPAGO
})

const controller = {


    buyProducts: async (req, res) => {
        try {
            // Crea un objeto de preferencia
            let preference = {
                items: [req.body],
                "back_urls": {
                    success: "http://localhost:3000",
                    pending: "http://localhost:3000",
                    failure: "http://localhost:3000"
                }
            };
            
            const mp = await mercadopago.preferences.create(preference);
            return res.json({ err: null, redirect: mp.body.init_point });

        } catch (err) { return res.json({ err: true, message: err }) }
    }
}

module.exports = controller;