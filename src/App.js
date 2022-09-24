import "./App.css";
import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";

function App() {
  const design = { color: "red", textAligh: "Center", fontsize: "1.5rem" };
  return (
    <div className="container">
      <div className="app-size">
        <h2 style={design}>แอพบัญชีรายรับ - รายจ่าย</h2>
        <FormComponent />
        <Transaction />
      </div>
    </div>
  );
}

export default App;
