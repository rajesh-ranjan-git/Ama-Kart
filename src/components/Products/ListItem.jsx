import { useState } from "react";
import AddToCartIcon from "../../assets/icons/add_cart.svg";

const ListItem = ({ data }) => {
  const [counter, setCounter] = useState(0);

  const increaseCounterByOne = () => {
    setCounter(counter + 1);
  };

  const decreaseCounterByOne = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div className={"item-card"}>
      <img
        className={"item-fluid"}
        src={`/assets/${data.thumbnail}`}
        alt="Some Title"
      />
      <div className={"item-card__information"}>
        <div className={"pricing"}>
          <span>₹{data.discountedPrice}</span>
          <small>
            <strike>₹{data.price}</strike>
          </small>
        </div>
        <div className={"title"}>
          <h3>{data.title}</h3>
        </div>
        {/* <button className={"cart-add"} onClick={handleClick}>
          <span>Add to Cart</span>
          <img src={AddToCartIcon} alt="CartIcon" />
        </button> */}
        <div className={"cart-addon"}>
          <button onClick={decreaseCounterByOne}>
            <span>-</span>
          </button>
          <span className={"counter"}>{counter}</span>
          <button onClick={increaseCounterByOne}>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
