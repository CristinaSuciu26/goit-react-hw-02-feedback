import { Component } from 'react';
import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return <p className={styles.message}>{this.props.message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
