import { useContext } from "react";
import DataContext from "../Data/DataContext";
import "./ReportComponent.css";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>฿{income - expense}</h1>
      <div className="report-container">
        <div>
          <h4>รายรับทั้งหมด</h4>
          <p className="report plus">฿{income}</p>
        </div>
        <div>
          <h4>รายจ่ายทั้งหมด</h4>
          <p className="report minus">฿{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
