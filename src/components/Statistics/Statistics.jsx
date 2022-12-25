import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={css.statName}>
        <span className={css.statItem}>Good:</span> {good}
      </li>
      <li className={css.statName}>
        <span className={css.statItem}>Neutral:</span> {neutral}
      </li>
      <li className={css.statName}>
        <span className={css.statItem}>Bad:</span> {bad}
      </li>
      <li className={css.statName}>
        <span className={css.statItem}>Total:</span>
        {total}
      </li>
      <li className={css.statName}>
        <span className={css.statItem}>Positive feedback:</span>
        {positivePercentage}%
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
