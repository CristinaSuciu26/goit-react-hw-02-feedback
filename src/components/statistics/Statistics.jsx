import { Component } from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    return (
      <ul>
        <div className={styles.statistics}>
          <li className={styles.good}>Good: {this.props.good}</li>
          <li className={styles.neutral}>Neutral: {this.props.neutral}</li>
          <li className={styles.bad}> Bad: {this.props.bad}</li>
        </div>

        <div className={styles.feedbackInfo}>
          <li className={styles.total}>Total: {this.props.total}</li>
          <li className={styles.positiveFeedback}>
            Positive Feedback Percentage: {this.props.positivePercentage}%
          </li>
        </div>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
