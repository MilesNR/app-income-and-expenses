import Items from "./Items";
import "./Transaction.css";
import { v4 as uuidv4 } from "uuid";

let Transaction = () => {
  let data = [
    { title: "ค่ารักษาพยาบาล", amount: 2000 },
    { title: "ค่าน้ำมัน", amount: 5000 },
    { title: "ค่าเช่าบ้าน", amount: 8000 },
    { title: "ค่าประกัน", amount: 1000 },
    { title: "เงินเดือน", amount: 50000 },
    { title: "ค่ากิน", amount: 10000 },
    { title: "ค่านวด", amount: 20000 },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        return <Items {...element} key={uuidv4()} />;
      })}
    </ul>
  );
};

export default Transaction;
