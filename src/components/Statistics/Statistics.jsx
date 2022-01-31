import PropTypes from 'prop-types';

const Statistics = (props) => {
  const { stats } = props;
  return (
    <section className="Statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
            <li key={id} className="item">
            <span>{label} </span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;