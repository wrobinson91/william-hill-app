import React from 'react';

const BoldedLabel = (props) => {
  const { label } = props;
  return (
    <span className="bolded-label">
      {label}
    </span>

  );
};

export default BoldedLabel;
