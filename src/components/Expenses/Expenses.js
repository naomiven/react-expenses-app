import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  const yearChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() == year
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onYearChange={yearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* This will return the <p></p> if the 1st statement is true */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
        {/* This will return the filteredExpenses if the 1st statement is true */}
        {/* props.items
          .filter((expense) => expense.date.getFullYear() == year) */}
        {/* {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
