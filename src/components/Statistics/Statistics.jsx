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
    <div>
      <h3 className={css.statName}>
        <span className={css.statItem}>Good:</span> {good}
      </h3>
      <h3 className={css.statName}>
        <span className={css.statItem}>Neutral:</span> {neutral}
      </h3>
      <h3 className={css.statName}>
        <span className={css.statItem}>Bad:</span> {bad}
      </h3>
      <h3 className={css.statName}>
        <span className={css.statItem}>Total:</span>
        {total}
      </h3>
      <h3 className={css.statName}>
        <span className={css.statItem}>Positive feedback:</span>
        {positivePercentage}%
      </h3>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
