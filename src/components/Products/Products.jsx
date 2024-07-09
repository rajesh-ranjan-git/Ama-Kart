// import InputForm from "./InputForm";
import ListItem from "./ListItem";
import Loader from "../UI/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ onAddItem, onRemoveItem }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  // const [presentItems, setPresentItems] = useState([]);

  useEffect(() => {
    // Using Fetch API
    // fetch(`https://ama-kart-default-rtdb.firebaseio.com/items.json`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Using Axios
    // axios
    //   .get(`https://ama-kart-default-rtdb.firebaseio.com/items.json`)
    //   .then((response) => {
    //     const data = response.data;
    //     const transformedData = data.map((item, idx) => {
    //       return {
    //         ...item,
    //         id: idx,
    //       };
    //     });
    //     setItems(transformedData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Using Async and AWait
    async function fetchItems() {
      try {
        const response = await axios.get(
          `https://ama-kart-default-rtdb.firebaseio.com/items.json`
        );
        const data = response.data;
        const transformedData = data.map((item, idx) => {
          return {
            ...item,
            quantity: 0,
            id: idx,
          };
        });
        setItems(transformedData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }

    fetchItems();
  }, []);

  // const handleInput = (event) => {
  //   setItems({
  //     ...items,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   if (items.discountedPrice > items.price) {
  //     alert("Discounted price cannot be greater than price.");
  //     return;
  //   }
  // };

  const handleAddItem = (id) => {
    // if (presentItems.indexOf(id) > -1) {
    //   return;
    // }
    // setPresentItems([...presentItems, id]);
    // onAddItem();

    let data = [...items];
    let index = data.findIndex((i) => i.id === id);
    data[index].quantity += 1;
    setItems([...data]);
    onAddItem(data[index]);
  };

  const handleRemoveItem = (id) => {
    // let index = presentItems.indexOf(id);
    // if (index > -1) {
    //   let items = [...presentItems];
    //   items.splice(index, 1);
    //   setPresentItems(...items);
    //   onRemoveItem();
    // }

    let data = [...items];
    let index = data.findIndex((i) => i.id === id);
    if (data[index].quantity !== 0) {
      data[index].quantity -= 1;
      setItems([...data]);
      onRemoveItem(data[index]);
    }
  };

  return (
    <>
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
            return (
              <ListItem
                data={item}
                key={item.id}
                onAdd={handleAddItem}
                onRemove={handleRemoveItem}
              />
            );
          })}
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
