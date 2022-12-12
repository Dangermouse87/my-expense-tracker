import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <div className='expense-item'>
      <div>
        <div><ExpenseDate date={props.date} /></div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>￥{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
// export to enable use across files
