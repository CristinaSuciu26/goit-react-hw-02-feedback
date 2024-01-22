import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className={styles.feedbackContainer}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
