const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQJXtLhJU2bmSqWGWSH8nXfpGmoAztuaIjwa3OuPlpvABxfdf3LK1nr5ccyMeLHvTWoZpcf90vuM6duc8rj9GRh00WJUJYpZR');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('the total amount is...', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: 'cad'
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// Listen Command
exports.api = functions.https.onRequest(app);
