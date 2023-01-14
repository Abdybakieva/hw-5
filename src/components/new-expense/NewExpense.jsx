import { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/Button/Button";
import "./NewExpense.css";

export const NewExpense = ({ onNewExpenseAdd }) => {
  const [showForm, setShowForm] = useState(false);

  const newExpenseButtonClickHandler = () => {
    setShowForm((prevState) => {
      return !prevState;  
    });
  };
  return (
    <div className="new">
      {showForm ? (
        <ExpenseForm
          onShowForm={newExpenseButtonClickHandler}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <Button
          title="Добавить новый расход"
          onClick={newExpenseButtonClickHandler}
        />
      )}
    </div>
  );
};
