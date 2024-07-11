import ListItem from "./ListItem";
import Loader from "../UI/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const params = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        let slug = `items.json`;
        if (params.category) {
          slug = `items-${params.category}.json`;
        }
        const response = await axios.get(
          `https://ama-kart-default-rtdb.firebaseio.com/${slug}`
        );
        const data = response.data;

        if (!data) {
          handleNotFound();
          return;
        }

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

    return () => {
      setItems([]);
      setLoader(true);
    };
  }, [params]);

  const handleNotFound = () => {
    Navigate("/404");
  };

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
