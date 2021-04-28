import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE",
            id:id
        });
         
    };
    
    return (
        <div className="checkoutProduct">
      
            <img  className="product__image" src={image}/>
          

            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {
                    Array(rating).fill().map((_) =>(
                       <p>♥</p>
                    ))
                }
            </div>
            <button  onClick={removeFromBasket} className="remove__btn" >Remove from basket</button>
            </div>
            

        </div>
    )
}

export default CheckoutProduct
