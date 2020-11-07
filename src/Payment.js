import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Payment.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Card } from '@material-ui/core';
import { db } from './firebase';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import instance from './axios';

function Payment() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Generates Stripe secret which allows the card to be charged

        const getClientSecret = async () => {
            const response = await instance({
                method: 'post',
                url: `/payments/create?total=${Math.round(getBasketTotal(basket) * 100)}` // sending amount in subunits
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        if (basket?.length > 0) {
            e.preventDefault();
            setProcessing(true);

            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({ paymentIntent }) => {

                if (user) {
                    db.collection('users')
                      .doc(user?.uid)
                      .collection('orders')
                      .doc(paymentIntent.id)
                      .set({
                      basket: basket,
                      amount: paymentIntent.amount,
                      created: paymentIntent.created
                  });
                  history.replace('/orders');
                } else {
                    history.replace('/'); 
                }
                
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                dispatch({
                    type: 'EMPTY_BASKET'
                })              
            });

        } else {
            setError('No items to purchase');
            setProcessing(false);
            setSucceeded(false);
            setDisabled(true);
        }
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message: null);
    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to='/checkout'>{basket?.length} items</Link>
                        )
                </h1>
                {/* Delivery Address */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>123 Amazon Clone Lane</p>
                            <p>Toronto, ON</p>
                        </div>
                    </div>
                {/* Review Items */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Items and Delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    </div>
                {/* Payment method */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__method">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                    </button>
                                </div>

                                {/* Error */}
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Payment
