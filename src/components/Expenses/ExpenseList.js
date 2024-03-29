import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className='expenses-list__list'>There are no expenses for this year</h2>
  };

  return ( 
  <ul className='expenses-list'>
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))};
  </ul>
)};
;

export default ExpensesList;