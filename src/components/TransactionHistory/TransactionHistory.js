import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transaction_history}>
      <thead>
        <tr>
          <th className={style.header}>Type</th>
          <th className={style.header}>Amount</th>
          <th className={style.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={style.data}>{item.type}</td>
            <td className={style.data}>{item.amount}</td>
            <td className={style.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
