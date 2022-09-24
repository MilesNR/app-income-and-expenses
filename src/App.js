import "./App.css";
import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import { useState, useEffect } from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./Component/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
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
          <Router>
            <div>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </ul>
              <Routes>
                <Route path="/" exact element={<ReportComponent />}></Route>
                <Route
                  path="/insert"
                  element={
                    <>
                      <FormComponent onAddItem={onAddNewItem} />
                      <Transaction items={items} />
                    </>
                  }
                ></Route>
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
