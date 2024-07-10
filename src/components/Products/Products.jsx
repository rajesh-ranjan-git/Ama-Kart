import ListItem from "./ListItem";
import Loader from "../UI/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
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

  return (
    <>
      <div className={"product-list"}>
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
