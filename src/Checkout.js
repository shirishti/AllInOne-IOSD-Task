import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import cf from "react-currency-format";
import Total from "./Total";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
    <div className="checkout__left">
    <img class="checkout__ad" src="./images/b5.jpg" style={{width:'800px'}}
 ></img>
      {basket?.length === 0 ? (
        <div>
          <h2 className="checkout__title">Your Cart is empty.</h2>
          <p>
            Your shopping cart is waiting. Give it purpose – fill it with
            groceries, clothing, household supplies, electronics and more.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item=>(
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
          ))}
          
        </div>
      )}
    </div>
    {basket.length>0 && (
      <div className="checkout__right">
     
     <Total/>
      </div>
    )}
    </div>
  );
}

export default Checkout;
