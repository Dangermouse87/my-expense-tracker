import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const buttonClick = () => {
    setTitle('Title Update')
    console.log(title)
  };

  return (
    <Card className='expense-item'>
      <div>
        <div><ExpenseDate date={props.date} /></div>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>￥{props.amount}</div>
      </div>
      <button onClick={buttonClick}>Change title</button>
    </Card>
  );
}
export default ExpenseItem;
// export to enable use across files
