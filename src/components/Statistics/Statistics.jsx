import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = (props) => {
  const { stats } = props;
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.stat__list}>
        {stats.map(({ id, label, percentage }) => (
            <li key={id} className={style.item}>
            <span className={style.label}>{label} </span>
            <span className={style.percent}>{percentage}%</span>
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