import { StatisticList } from './StatisticList';
import PropTypes from 'prop-types';
import { Section, Title, StatList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(data => (
          <StatisticList
            key={data.id}
            label={data.label}
            percent={data.percentage}
          />
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { Statistics };
