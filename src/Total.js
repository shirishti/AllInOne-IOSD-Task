import React from 'react'
import "./Total.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketPrice } from './reducer';

function Total() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="total">
        <CurrencyFormat
        renderText={(value)=>(
            
          <>
          <p>Subtotal ({basket.length} items):<strong>{`${value}`}</strong></p>
       
          <small className="total__gift">
              <input type="checkbox"/>The order contains a gift
          </small>
          
          </>
        )}
        decimalScale={2}
        value={getBasketPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
            <button>Checkout</button>
        </div>
    )
}

export default Total
