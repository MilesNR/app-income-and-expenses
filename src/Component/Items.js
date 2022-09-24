import "./Items.css";
let Items = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";

  return (
    <li className={status}>
      {title}
      <span>
        {" "}
        {symbol}
        {Math.abs(amount)}
      </span>
    </li>
  );
};
export default Items;
