import { useState, useEffect } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  console.log("Render FormComponent");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = { id: uuidv4(), title: title, amount: Number(amount) };
    props.onAddItem(itemData);
    setTitle("");
    setAmount("");
  };
  useEffect(() => {
    const checkData = title.trim().length > 0 && amount !== 0 && amount !== "";
    setFormValid(checkData);
  }, [title, amount]);
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการของคุณ"
            onChange={inputTitle}
            value={title}
          ></input>
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+รายรับ , -รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
