import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import style from './TransactionHistory.module.css';



const TransactionHistory = ({items}) => {
  return (<table className={style.transaction__history}>
      <thead className={style.transaction__head}>
        <tr >
          <th >Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table> );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;