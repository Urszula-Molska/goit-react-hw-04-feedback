import React, { Component } from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const App = () => {
  this.countTotalFeedback = this.countTotalFeedback.bind(this);

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  handleIncrement = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(1);
    return percentage;
  };

  const buttonNames = Object.keys(this.state);

  return (
    <div>
      <Section>
        <a href="urszula-molska.github.io/goit-react-hw-04-feedback/">
          urszula-molska.github.io/goit-react-hw-04-feedback
        </a>
        <a href="https://github.com/Urszula-Molska/goit-react-hw-04-feedback">
          https://github.com/Urszula-Molska/goit-react-hw-04-feedback
        </a>
      </Section>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonNames}
          onLeaveFeedback={this.handleIncrement}
        />
      </Section>
      {this.countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};

export default App;
