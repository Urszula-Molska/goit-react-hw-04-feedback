//import React, { Component } from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const App = () => {
  const [stat, setStat] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleIncrement = event => {
    const { name } = event.target;
    setStat({ ...stat, [name]: stat[name] + 1 });
  };

  const buttonNames = Object.keys(stat);

  const countTotalFeedback = () => {
    const total = stat.good + stat.neutral + stat.bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = ((stat.good / countTotalFeedback()) * 100).toFixed(1);
    return percentage;
  };

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
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={stat.good}
            neutral={stat.neutral}
            bad={stat.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};

export default App;
