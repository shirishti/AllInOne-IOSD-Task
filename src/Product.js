import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,price,rating,image}) {
    const [{basket},disptach]=useStateValue();
    const addToCart=()=>{
disptach({
    type:"ADD",
    item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
    }
})
    }
    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill().map((_) =>(
                       <p>⭐</p>
                    ))
                }
            </div>
            </div>
            <img src={image}/>
            <button onClick={addToCart}>Add to basket</button>
            
        </div>
      
    )
}

export default Product
