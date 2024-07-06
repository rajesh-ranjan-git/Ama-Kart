import InputForm from "./InputForm";
import ListItem from "./ListItem";
import { useState } from "react";

const Products = () => {
  const [item, setItem] = useState({
    id: 0,
    discountedPrice: 340,
    price: 450,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  });

  const handleInput = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (item.discountedPrice > item.price) {
      alert("Discounted price cannot be greater than price.");
      return;
    }
  };

  return (
    <div className={"product-list"}>
      <div className={"form"}>
        <InputForm
          item={item}
          onChangeInput={handleInput}
          onFormSubmit={submitForm}
        />
      </div>
      <div className={"product-list--wrapper"}>
        <ListItem data={item}></ListItem>
      </div>
    </div>
  );
};

export default Products;
