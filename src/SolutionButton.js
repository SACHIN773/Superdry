import React from 'react';

const SolutionButton = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <button
      className='Solution'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Solution
    </button>
  );
};

export default SolutionButton;
