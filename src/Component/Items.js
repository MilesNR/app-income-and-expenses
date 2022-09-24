let Items = (props) => {
  const { title, amount } = props;

  return (
    <li>
      {title}
      <span> {amount}</span>
    </li>
  );
};
export default Items;
