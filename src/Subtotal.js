import React from 'react'
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import NumberFormat from "react-number-format";
import { useHistory } from 'react-router';

function Subtotal() {

  const history = useHistory();

  const [{ basket }, dispatch] = useStateValue();

  const subTotal = basket.reduce((total, item) => total + item.price, 0);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (

    <div className="subtotal">

      <NumberFormat renderText={(subTotal) => (
        <>
          <p>Subtotal ( {basket?.length} items ) : <strong>{numberWithCommas(subTotal)}</strong> </p>
          <small className="subtotal__gift"><input type="checkbox" /> This order contains a gift</small>
        </>
      )}
        decimalScale={2}
        value={subTotal}
        displayType={'text'}
        thousandSeperator={true}
        prefix={"Rs "}
      />

      <button onClick={e => history.push('/payment')}>Procced to Checkout</button>
    </div>
  )
}

export default Subtotal
