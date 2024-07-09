import { Fragment, useState } from "react";
import AddToCartIcon from "../../assets/icons/add_cart.svg";
import Modal from "../UI/Modal";

const ListItem = ({ data, onAdd, onRemove }) => {
  const [counter, setCounter] = useState(0);
  const [showItemsModal, setShowItemsModal] = useState(false);

  const increaseCounterByOne = (e) => {
    onAdd(data.id);
    e.stopPropagation();
    setCounter(counter + 1);
  };

  const decreaseCounterByOne = (e) => {
    e.stopPropagation();
    if (counter === 0) {
      return;
    }
    if (counter == 1) {
      onRemove(data.id);
    }
    setCounter(counter - 1);
  };

  const handleItemsModal = () => {
    setShowItemsModal((previousState) => !previousState);
  };

  return (
    <Fragment>
      <div className={"item-card"} onClick={handleItemsModal}>
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
      {showItemsModal && (
        <Modal onClose={handleItemsModal}>
          <div className="item-card__modal">
            <div className="img-wrap">
              <img
                className={"item-fluid"}
                src={`/assets/${data.thumbnail}`}
                alt="Some Title"
              />
            </div>
            <div className="meta">
              <h3>{data.title}</h3>
              <div className={"pricing"}>
                <span>₹{data.discountedPrice}</span>
                <small>
                  <strike>₹{data.price}</strike>
                </small>
              </div>
              <p>{data.description}</p>
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
        </Modal>
      )}
    </Fragment>
  );
};

export default ListItem;
