import AddToCartIcon from "../../assets/icons/add_cart.svg";

const ListItem = ({ data }) => {
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
        <button
          className={"cart-add"}
          onClick={() => console.log("Clicked! ", data)}
        >
          <span>Add to Cart</span>
          <img src={AddToCartIcon} alt="CartIcon" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
