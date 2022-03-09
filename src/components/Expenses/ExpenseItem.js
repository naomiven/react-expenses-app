import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // useState is a React hook -> must only be called inside component functions
  // title: pointer to managed value, here at props.title
  // setTitle: function to set new title

  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React!');

  // const clickHandler = () => {
  //   // Note this will not change the title on the page!
  //   // This is not re-evaluating ("rendering") the component
  //   // title = 'Updated!';
  //   // By calling this, title will get a new value AND this component will be
  //   // executed again to "refresh" itself
  //   setTitle('Updated!');
  // };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
