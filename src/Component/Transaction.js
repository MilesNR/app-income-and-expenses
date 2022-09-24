import Items from "./Items";
import "./Transaction.css";

let Transaction = (props) => {
  const { items } = props;

  return (
    <ul className="item-list">
      {items.map((element) => {
        return <Items {...element} key={element.id} />;
      })}
    </ul>
  );
};

export default Transaction;
