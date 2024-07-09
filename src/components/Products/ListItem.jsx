import { Fragment, useState } from "react";
import AddToCartIcon from "../../assets/icons/add_cart.svg";
import Modal from "../UI/Modal";

const ListItem = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  const handleModal = () => {
    setShowModal((previousState) => !previousState);
  };

  return (
    <Fragment>
      <div className={"item-card"} onClick={handleModal}>
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
          {counter < 1 ? (
            <button className={"cart-add"} onClick={increaseCounterByOne}>
              <span>Add to Cart</span>
              <img src={AddToCartIcon} alt="CartIcon" />
            </button>
          ) : (
            <div className={"cart-addon"}>
              <button onClick={decreaseCounterByOne}>
                <span>-</span>
              </button>
              <span className={"counter"}>{counter}</span>
              <button onClick={increaseCounterByOne}>
                <span>+</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {showModal && <Modal onClose={handleModal} />}
    </Fragment>
  );
};

export default ListItem;
