import logo from "./logo.svg";
import "./App.css";
import Transaction from "./Component/Transaction";
import Items from "./Component/Items";
function App() {
  const design = { color: "red", textAligh: "Center", fontsize: "1.5rem" };
  return (
    <div className="container">
      <h2 style={design}>แอพบัญชีรายรับ - รายจ่าย</h2>
      <Transaction />
    </div>
  );
}

export default App;
