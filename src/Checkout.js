import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"

function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue();

  return (

    <div className="Checkout">

      <div className="checkout__left">

        <h3>HELLO, {user ? user.email : 'Guest'}</h3>

        <h2 className="checkout__title">
          YOUR SHOPPING CART
        </h2>

        {basket.map(item => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
