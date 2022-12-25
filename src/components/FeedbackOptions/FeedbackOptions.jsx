import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            type="button"
            name={option}
            key={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  step: PropTypes.number,
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};

export default FeedbackOptions;
