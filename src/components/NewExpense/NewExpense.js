import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setShowExpenseForm(false);
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = (event) => {
    setShowExpenseForm(true);
  };

  const cancelHandler = () => {
    setShowExpenseForm(false);
  };

  const addNewExpenseButton = (
    <div>
      <button onClick={showExpenseFormHandler}>Add New Expense</button>
    </div>
  );

  const newExpenseForm = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={cancelHandler}
    />
  );

  const content = showExpenseForm ? newExpenseForm : addNewExpenseButton;

  return (
    <div className='new-expense'>
      {/* <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      /> */}
      {content}
    </div>
  );
};

export default NewExpense;
