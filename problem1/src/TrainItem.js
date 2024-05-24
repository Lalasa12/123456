import React from 'react';

const TrainItem = ({ train }) => {
  return (
    <div className="train-item">
      <h2>{train.name}</h2>
      <p>Departure: {train.departure}</p>
      <p>Arrival: {train.arrival}</p>
    </div>
  );
}

export default TrainItem;
