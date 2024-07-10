import { Fragment, useState } from "react";
import AddToCartIcon from "../../assets/icons/add_cart.svg";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";

const ListItem = ({ data }) => {
  const [showItemsModal, setShowItemsModal] = useState(false);

  const item = useSelector((state) =>
    state.items.find((item) => item.id === data.id)
  );

  const dispatch = useDispatch();

  const increaseCounterByOne = (e) => {
    e.stopPropagation();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        item: data,
      },
    });
  };

  const decreaseCounterByOne = (e) => {
    e.stopPropagation();
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        id: data.id,
      },
    });
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
          {!item || item?.quantity < 1 ? (
            <button className={"cart-add"} onClick={increaseCounterByOne}>
              <span>Add to Cart</span>
              <img src={AddToCartIcon} alt="CartIcon" />
            </button>
          ) : (
            <div className={"cart-addon"}>
              <button onClick={decreaseCounterByOne}>
                <span>-</span>
              </button>
              <span className={"counter"}>{item.quantity}</span>
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
              {!item || item?.quantity < 1 ? (
                <button className={"cart-add"} onClick={increaseCounterByOne}>
                  <span>Add to Cart</span>
                  <img src={AddToCartIcon} alt="CartIcon" />
                </button>
              ) : (
                <div className={"cart-addon"}>
                  <button onClick={decreaseCounterByOne}>
                    <span>-</span>
                  </button>
                  <span className={"counter"}>{item.quantity}</span>
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
