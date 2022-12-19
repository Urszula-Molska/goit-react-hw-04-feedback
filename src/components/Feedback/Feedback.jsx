import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.state = {
      goodValue: props.initialValue,
      neutralValue: props.initialValue,
      badValue: props.initialValue,
    };
  }

  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  handleIncrementGood = evt => {
    console.log('Increment button was clicked!', evt);
    console.log('this.props: ', this.props);
    this.setState(prevState => {
      return {
        goodValue: prevState.goodValue + 1,
      };
    });
  };

  handleIncrementNeutral = evt => {
    this.setState(prevState => {
      return {
        neutralValue: prevState.neutralValue + 1,
      };
    });
  };

  handleIncrementBad = evt => {
    this.setState(prevState => {
      return {
        badValue: prevState.badValue + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        badValue: prevState.badValue + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total =
      this.state.goodValue + this.state.neutralValue + this.state.badValue;
    console.log(typeof total);
    console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (
      (this.state.goodValue / this.countTotalFeedback()) *
      100
    ).toFixed(1);
    return percentage;
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleIncrementGood}>
            Good || Increment by {step}
          </button>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral || Increment by {step}
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad || Increment by {step}
          </button>
        </div>
        <h1>Statistics</h1>
        <h3>Good: {this.state.goodValue} </h3>
        <h3>Neutral: {this.state.neutralValue}</h3>
        <h3>Bad: {this.state.badValue}</h3>
        <h3>Total:{this.countTotalFeedback()}</h3>
        <h3>Positive feedback: {this.countPositiveFeedbackPercentage()}%</h3>
      </div>
    );
  }
}
export default Feedback;
