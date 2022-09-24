import "./App.css";
import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import { useState, useEffect } from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./Component/ReportComponent";

function App() {
  const initState = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -8000 },
    { id: 2, title: "ค่าน้ำ", amount: -600 },
    { id: 3, title: "เงินเดือน", amount: 80000 },
  ];
  const [items, setItems] = useState(initState);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);
  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <div className="app-size">
          <h2 className="header-design">แอพบัญชีรายรับ - รายจ่าย</h2>
          <ReportComponent />
          <FormComponent onAddItem={onAddNewItem} />
          <Transaction items={items} />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
