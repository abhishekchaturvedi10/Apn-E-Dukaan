import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, desc, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        desc: desc,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }

  return (

    <div className="product">

      <div className="product__Info">
        <strong> {title} </strong>
        <p> {desc} </p>
        <p className='product__price'>
          <small>Rs</small>
          <strong> {numberWithCommas(price)} </strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (<p> &#9733; </p>))}
        </div>
      </div>

      <img src={image} />

      <button onClick={addToBasket}>Add Item to Cart</button>
    </div>
  )
}

export default Product;