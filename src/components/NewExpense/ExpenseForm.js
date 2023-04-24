import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('')
  
  const [userInput, setUserInput] = useState({
    setEnteredTitle: '',
    setEnteredAmount: '',
    setEnteredDate: ''
  });

  const titleChange = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      setEnteredTitle: event.target.value,
    })
  };

  const amountChange = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      setEnteredAmount: event.target.value,
    })
  };

  const dateChange = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      setEnteredDate: event.target.value,
    })
  };

  return <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={titleChange} />
      </div>
      <div className='new-expense__control'>
        <label>Price</label>
        <input type='number' min='0.01' step='0.01' onChange={amountChange} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2023-01-01' onChange={dateChange} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;