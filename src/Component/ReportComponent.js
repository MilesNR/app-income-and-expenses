import { useContext } from "react";
import DataContext from "../Data/DataContext";
import "./ReportComponent.css";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>฿{formatNumber((income - expense).toFixed(2))}</h1>
      <div className="report-container">
        <div>
          <h4>รายรับทั้งหมด</h4>
          <p className="report plus">฿{formatNumber(income)}</p>
        </div>
        <div>
          <h4>รายจ่ายทั้งหมด</h4>
          <p className="report minus">฿{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
