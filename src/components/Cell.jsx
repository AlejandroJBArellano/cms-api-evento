import React from 'react';
import './ColorField.scss';

const Cell = (props) => {
  const { cellData } = props;

  if (!cellData) return null;

  console.log()

  return (
    <div
      className="chip"
      style={{ backgroundColor }}
    />
  )
}

export default Cell;