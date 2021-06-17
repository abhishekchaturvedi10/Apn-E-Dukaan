import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, desc, price, rating, hideButton }) {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct__image" src={image} />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__desc'>{desc}</p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => (<p> &#9733; </p>))}
        </div>
        <p className='checkoutProduct__price'>
          <small>Rs </small>
          <strong>{numberWithCommas(price)}</strong>
        </p>
        {!hideButton && (
          <button onClick={removeFromBasket}>Delete Item</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct
