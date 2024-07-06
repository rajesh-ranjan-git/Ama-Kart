import ListItem from "./ListItem";
import { useState } from "react";

// const items = [
//   {
//     id: 0,
//     discountedPrice: 340,
//     price: 450,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 1,
//     discountedPrice: 480,
//     price: 540,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 2,
//     discountedPrice: 830,
//     price: 920,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 3,
//     discountedPrice: 880,
//     price: 1100,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 4,
//     discountedPrice: 60,
//     price: 90,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 5,
//     discountedPrice: 80,
//     price: 100,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 6,
//     discountedPrice: 80,
//     price: 100,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 7,
//     discountedPrice: 80,
//     price: 100,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 8,
//     discountedPrice: 80,
//     price: 100,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 9,
//     discountedPrice: 80,
//     price: 100,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 10,
//     discountedPrice: 80,
//     price: 100,
//     title: "Title of the Item",
//     thumbnail: "placeholder.png",
//   },
// ];

const Products = () => {
  const [item, setItem] = useState({
    id: 0,
    discountedPrice: 340,
    price: 450,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  });

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
    setItem({ ...item, title: event.target.value });
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
    setItem({ ...item, price: event.target.value });
  };
  const handleDiscountedPrice = (event) => {
    setDiscountedPrice(event.target.value);
    setItem({ ...item, discountedPrice: event.target.value });
  };
  const handleThumbnail = (event) => {
    setThumbnail(event.target.value);
    setItem({ ...item, thumbnail: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setItem({
      title,
      price,
      discountedPrice,
      thumbnail,
    });
  };

  return (
    <div className={"product-list"}>
      <div className={"form"}>
        <form onSubmit={submitForm}>
          <h1>Item Card Details</h1>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={handleTitle}
            />
            <br></br>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={handlePrice}
            />
            <br></br>
            <label htmlFor="discountedPrice">Discounted Price</label>
            <input
              type="number"
              placeholder="Enter Discounted Price"
              value={discountedPrice}
              onChange={handleDiscountedPrice}
            />
            <br></br>
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="text"
              placeholder="Enter Thumbnail"
              value={thumbnail}
              onChange={handleThumbnail}
            />
          </div>
          <div className="submit-wrap">
            <button>Update</button>
          </div>
        </form>
      </div>
      <div className={"product-list--wrapper"}>
        <ListItem data={item}></ListItem>
        {/* <ListItem data={items[0]}></ListItem>
        { <ListItem data={items[1]}></ListItem>
        <ListItem data={items[2]}></ListItem>
        <ListItem data={items[3]}></ListItem>
        <ListItem data={items[4]}></ListItem>
        <ListItem data={items[5]}></ListItem>
        <ListItem data={items[6]}></ListItem>
        <ListItem data={items[7]}></ListItem>
        <ListItem data={items[8]}></ListItem>
        <ListItem data={items[9]}></ListItem>
        <ListItem data={items[10]}></ListItem> */}
      </div>
    </div>
  );
};

export default Products;
