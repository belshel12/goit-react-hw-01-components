import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import { Table, Head, Th } from './Transactions.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Head>

      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { TransactionHistory };
