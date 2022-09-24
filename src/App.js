import "./App.css";
import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import { useState, useEffect, useReducer } from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./Component/ReportComponent";

function App() {
  const [items, setItems] = useState([]);
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
  const [showReport, setShowReport] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);
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
          {showReport && <ReportComponent />}
          <FormComponent onAddItem={onAddNewItem} />
          <Transaction items={items} />
          <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
          <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
