import "./App.css";
import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  return (
    <div className="container">
      <div className="app-size">
        <h2 className="header-design">แอพบัญชีรายรับ - รายจ่าย</h2>
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </div>
  );
}

export default App;
