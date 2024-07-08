import InputForm from "./InputForm";
import ListItem from "./ListItem";
import { useState } from "react";

const Products = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      discountedPrice: 340,
      price: 450,
      title: "Title of the Item0",
      thumbnail: "placeholder.png",
    },
    {
      id: 1,
      discountedPrice: 340,
      price: 450,
      title: "Title of the Item1",
      thumbnail: "placeholder.png",
    },
    {
      id: 2,
      discountedPrice: 340,
      price: 450,
      title: "Title of the Item2",
      thumbnail: "placeholder.png",
    },
    {
      id: 3,
      discountedPrice: 340,
      price: 450,
      title: "Title of the Item3",
      thumbnail: "placeholder.png",
    },
  ]);

  const handleInput = (event) => {
    setItems({
      ...items,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (items.discountedPrice > items.price) {
      alert("Discounted price cannot be greater than price.");
      return;
    }
  };

  return (
    <div className={"product-list"}>
      {/* <div className={"form"}>
        <InputForm
          item={items}
          onChangeInput={handleInput}
          onFormSubmit={submitForm}
        />
      </div> */}
      <div className={"product-list--wrapper"}>
        {items.map((item) => {
          return <ListItem data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
