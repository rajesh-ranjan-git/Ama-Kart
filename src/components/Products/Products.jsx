import ListItem from "./ListItem";

const items = [
  {
    id: 0,
    discountedPrice: 340,
    price: 450,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 1,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 2,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 3,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 4,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 5,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 6,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 7,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 8,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 9,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 10,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
  {
    id: 11,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item",
    thumbnail: "placeholder.png",
  },
];

const Products = () => {
  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        <ListItem data={items[0]}></ListItem>
        <ListItem data={items[1]}></ListItem>
        <ListItem data={items[2]}></ListItem>
        <ListItem data={items[3]}></ListItem>
        <ListItem data={items[4]}></ListItem>
        <ListItem data={items[5]}></ListItem>
        <ListItem data={items[6]}></ListItem>
        <ListItem data={items[7]}></ListItem>
        <ListItem data={items[8]}></ListItem>
        <ListItem data={items[9]}></ListItem>
        <ListItem data={items[10]}></ListItem>
        <ListItem data={items[11]}></ListItem>
      </div>
    </div>
  );
};

export default Products;
