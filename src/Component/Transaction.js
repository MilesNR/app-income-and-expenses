import { useContext } from "react";
import Items from "./Items";
import "./Transaction.css";
import DataContext from "../Data/DataContext";

let Transaction = (props) => {
  const { items } = props;
  const name = useContext(DataContext);
  return (
    <>
      <ul className="item-list">
        {items.map((element) => {
          return <Items {...element} key={element.id} />;
        })}
      </ul>
    </>
  );
};

export default Transaction;
