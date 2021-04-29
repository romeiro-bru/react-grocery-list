import "./styles.css";
import { useEffect, useState } from "react";
import { Header } from "./Header/Header";
// import { Button } from "./Button/Button";

const lists = [
  {
    id: 1,
    name: "Condiments",
    item1: "salt",
    item2: "pepper",
    item3: "mustard"
  },
  {
    id: 2,
    name: "Grains",
    item1: "rice",
    item2: "oatmeal",
    item3: "granola"
  },
  {
    id: 3,
    name: "Fruits",
    item1: "papaya",
    item2: "banana",
    item3: "lemon"
  },
  {
    id: 4,
    name: "Household",
    item1: "bleach",
    item2: "alcohol",
    item3: "sponge"
  }
];

export default function App() {
  const [grocery, setGrocery] = useState(lists);

  // useEffect(() => setGrocery(lists), []);

  console.log(grocery);

  const removeItems = (name) => grocery.filter((el) => el.name !== name);

  const handleClick = (name) => {
    console.log("HERE =>", name);
    removeItems(name);
  };

  const groceryCards = (
    <ul>
      {grocery.map((item, index) => {
        return (
          <li name={item.name} id={index} key={index} className="groceryList">
            <h1>{item.name}</h1>
            <ul>
              <li>{item.item1}</li>
              <li>{item.item2}</li>
              <li>{item.item3}</li>
            </ul>
            <button onClick={handleClick(item.name)}>Got it</button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="App">
      <Header />
      {/* <Button /> */}
      <section className="grocery"> {groceryCards}</section>
    </div>
  );
}
