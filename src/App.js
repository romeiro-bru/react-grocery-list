import "./styles.css";
import { useState } from "react";
import { Header } from "./Header/Header";

const lists = [
  {
    name: "Condiments",
    item1: "salt",
    item2: "pepper",
    item3: "mustard"
  },
  {
    name: "Grains",
    item1: "rice",
    item2: "oatmeal",
    item3: "granola"
  },
  {
    name: "Fruits",
    item1: "papaya",
    item2: "banana",
    item3: "lemon"
  },
  {
    name: "Vegetables",
    item1: "zuccini",
    item2: "mushroom",
    item3: "pumpkin"
  },
  {
    name: "Household",
    item1: "bleach",
    item2: "alcohol",
    item3: "sponge"
  },
  {
    name: "Beverages",
    item1: "coffee",
    item2: "apple juice",
    item3: "spring water"
  }
];

export default function App() {
  const [grocery, setGrocery] = useState(lists);

  const handleRemoveItem = (name) => {
    setGrocery(grocery.filter((el) => el.name !== name));
    // console.log("HERE =>", name);
  };
  const handleClick = () => {
    setGrocery(lists);
  };
  // console.log(grocery);

  let groceryCards;
  if (grocery.length !== 0) {
    groceryCards = (
      <ul>
        {grocery.map((item, index) => {
          return (
            <li key={index} className="groceryList">
              <h1>{item.name}</h1>
              <ul>
                <li>{item.item1}</li>
                <li>{item.item2}</li>
                <li>{item.item3}</li>
              </ul>
              <button onClick={() => handleRemoveItem(item.name)}>Check</button>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <div>
        <h1>Don't forget your grocery list!</h1>
        <button onClick={handleClick}>OK!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <section className="grocery">{groceryCards}</section>
    </div>
  );
}
