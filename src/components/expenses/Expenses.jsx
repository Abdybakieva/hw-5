import { useState } from "react";
import Chart from "../Chart/Chart";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expense.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredItems = props.expenses.filter((element) => {
    return  new Date(element.date).getFullYear().toString() === selectedYear;

  });

  return (
    <ul className="ul">
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems}/>
      {filteredItems.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title}
            title={elem.title}
            price={elem.price}
            date={elem.date}
          />
        );
      })}
    </ul>
  );
};
export default Expenses;
