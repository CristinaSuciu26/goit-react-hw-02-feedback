import { Component } from 'react';
import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className={styles.buttonsContainer}>
        {this.props.options.map(option => (
          <button
            className={styles.buttons}
            key={option}
            onClick={() => this.props.onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;
