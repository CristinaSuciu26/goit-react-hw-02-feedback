import { Component } from 'react';
import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    return (
      <div className={styles.feedbackContainer}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
