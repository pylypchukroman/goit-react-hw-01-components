import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';


const TransactionHistoryItem = ({ id, type, amount, currency }) => {
    return (  <tr className={style.transaction__row}>
      <td >{type}</td>
      <td >{amount}</td>
      <td >{currency}</td>
    </tr> );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;