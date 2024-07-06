import React from "react";

const InputForm = (props) => {
  const handleInput = (event) => {
    props.onChangeInput(event);
  };

  const submitForm = () => {};

  return (
    <form onSubmit={props.onFormSubmit}>
      <h1>Item Card Details</h1>
      <div className="input-field">
        <label htmlFor="title" name="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={props.item.title}
          onChange={handleInput}
        />
        <br></br>
        <label htmlFor="price" name="price">
          Price
        </label>
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={props.item.price}
          onChange={handleInput}
        />
        <br></br>
        <label htmlFor="discountedPrice" name="discountedPrice">
          Discounted Price
        </label>
        <input
          type="number"
          name="discountedPrice"
          placeholder="Enter Discounted Price"
          value={props.item.discountedPrice}
          onChange={handleInput}
        />
        <br></br>
        <label htmlFor="thumbnail" name="thumbnail">
          Thumbnail
        </label>
        <input
          type="text"
          name="thumbnail"
          placeholder="Enter Thumbnail"
          value={props.item.thumbnail}
          onChange={handleInput}
        />
      </div>
      <div className="submit-wrap">
        <button>Update</button>
      </div>
    </form>
  );
};

export default InputForm;
