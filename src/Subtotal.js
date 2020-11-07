import React from 'react';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();
    return (
        <div className='subtotal'>
            {/* insert price here */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
