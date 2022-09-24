import "./Items.css";
let Items = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <li className={status}>
      {title}
      <span>
        {" "}
        {symbol}
        {formatNumber(Math.abs(amount))}
      </span>
    </li>
  );
};
export default Items;
