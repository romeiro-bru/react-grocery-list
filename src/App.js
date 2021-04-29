import "./styles.css";
import { Header } from "./Header/Header";
import { GroceryList } from "./GroceryList/GroceryList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <GroceryList />
    </div>
  );
}
