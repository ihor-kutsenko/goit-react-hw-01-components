import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.table_head}>Type</th>
          <th className={css.table_head}>Amount</th>
          <th className={css.table_head}>Currency</th>
        </tr>
      </thead>

      <tbody >
        {items.map(item => {
          return (
            <tr className={css.row_table_content} key={item.id}>
              <td className={css.cell}>{item.type}</td>
              <td className={css.cell}>{item.amount}</td>
              <td className={css.cell}>{item.currency}</td>
            </tr>
          )
        })}
    
      </tbody>
    </table>

  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
}


export default TransactionHistory;