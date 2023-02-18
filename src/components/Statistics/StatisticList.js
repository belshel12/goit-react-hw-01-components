import PropTypes from 'prop-types';
import { Item, Label, PercentAge } from './Statistics.styled';

const StatisticList = ({ label, percent }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <PercentAge>{percent}%</PercentAge>
    </Item>
  );
};

StatisticList.propTypes = {
  label: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export { StatisticList };
