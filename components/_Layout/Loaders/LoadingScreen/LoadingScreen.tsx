import LoadingDots from '../LoadingDots';
import PropTypes from 'prop-types';
import React from 'react';

type LoadingScreenProps = {
  title?: string,
  description?: string
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ title, description }) => {
  return <div className="fixed h-screen w-full top-0 bottom-0 left-0 right-0 bg-dark-500" style={{ zIndex: 1099 }}>
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className={title ? "mb-4" : ""}>
        <LoadingDots size="xl" />
      </div>
      {
        title &&
        <span className="block text-lg">
          {title}
        </span>
      }
      {
        description &&
        <span>{description}</span>
      }
    </div>
  </div>;
};

LoadingScreen.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default LoadingScreen;
