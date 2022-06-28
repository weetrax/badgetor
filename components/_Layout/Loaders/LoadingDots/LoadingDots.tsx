import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './LoadingDots.module.scss';


interface LoadingDotsProps {
  size?: "md" | "lg" | "xl",
};

const LoadingDots: React.FC<LoadingDotsProps> = ({ size = "md" }) => {
  return <span className={styles.loading}>
    {Array.from(Array(3)).map((n, i) => {
      return <span key={`loading_dots_${i}`} className={classNames(styles[size], "bg-primary-500")} />
    })}
  </span>;
};


LoadingDots.propTypes = {
  size: PropTypes.oneOf(["md", "lg", "xl"])
};

export default LoadingDots;
