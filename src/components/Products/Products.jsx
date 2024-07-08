import InputForm from "./InputForm";
import ListItem from "./ListItem";
import Loader from "../UI/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

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
            return <ListItem data={item} key={item.id} />;
          })}
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
