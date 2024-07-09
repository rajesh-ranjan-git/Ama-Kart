import React from "react";

const CartItem = ({ data }) => {
  return (
    <div className="checkout-modal_list-item">
      <div className="img-wrap">
        {console.log(data)}
        <img
          src={`/assets/${data.thumbnail}`}
          alt="img-cart-item"
          className="img-fluid"
        />
      </div>
      <div className="information">
        <div>
          <h4>{data.title}</h4>
          <div className="pricing">
            <span>{data.discountedPrice}</span>
            <small>
              <strike>{data.price}</strike>
            </small>
          </div>
        </div>
        <div className="cart-addon cart-addon__modal">
          <button>-</button>
          <span className="counter">{data.quantity}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
